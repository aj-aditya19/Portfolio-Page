import { useEffect } from "react";

export function useScrollLock() {
  useEffect(() => {
    const count = Number(document.body.dataset.scrollLockCount || 0);
    document.body.dataset.scrollLockCount = String(count + 1);
    document.body.style.overflow = "hidden";

    return () => {
      const remaining = Number(document.body.dataset.scrollLockCount || 1) - 1;
      if (remaining <= 0) {
        delete document.body.dataset.scrollLockCount;
        document.body.style.overflow = "";
      } else {
        document.body.dataset.scrollLockCount = String(remaining);
      }
    };
  }, []);
}

export function useEscapeKey(onEscape) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        e.stopPropagation();
        onEscape();
      }
    }
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [onEscape]);
}
