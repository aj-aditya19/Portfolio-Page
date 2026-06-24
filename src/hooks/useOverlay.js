import { useEffect } from 'react';

// Reference-counted body scroll lock so two overlays (e.g. ProjectModal
// opened on top of AllProjects) can both be mounted without one's cleanup
// prematurely re-enabling scroll while the other is still open.
export function useScrollLock() {
  useEffect(() => {
    const count = Number(document.body.dataset.scrollLockCount || 0);
    document.body.dataset.scrollLockCount = String(count + 1);
    document.body.style.overflow = 'hidden';

    return () => {
      const remaining = Number(document.body.dataset.scrollLockCount || 1) - 1;
      if (remaining <= 0) {
        delete document.body.dataset.scrollLockCount;
        document.body.style.overflow = '';
      } else {
        document.body.dataset.scrollLockCount = String(remaining);
      }
    };
  }, []);
}

// Capture-phase Escape handler, stopped from propagating so a nested modal's
// Escape doesn't also bubble up and close the overlay underneath it.
export function useEscapeKey(onEscape) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onEscape();
      }
    }
    document.addEventListener('keydown', onKey, true);
    return () => document.removeEventListener('keydown', onKey, true);
  }, [onEscape]);
}
