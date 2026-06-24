// Centralizes the "smart action" logic the user asked for:
// - project_type "web"  -> open the live site in a new tab
// - project_type "app"  -> trigger an automatic APK download
// If an app project has no apk file yet, falls back gracefully to the repo link.
export function getPrimaryAction(project) {
  const { project_type, links } = project;

  if (project_type === 'app') {
    if (links.apk) {
      return { type: 'download', href: links.apk, label: 'Download APK' };
    }
    if (links.repo) {
      return { type: 'repo', href: links.repo, label: 'View Source' };
    }
    return { type: 'none', href: null, label: 'Coming Soon' };
  }

  // web (default)
  if (links.visit) {
    return { type: 'visit', href: links.visit, label: 'Visit Site' };
  }
  if (links.repo) {
    return { type: 'repo', href: links.repo, label: 'View Source' };
  }
  return { type: 'none', href: null, label: 'Coming Soon' };
}

export function triggerPrimaryAction(project) {
  const action = getPrimaryAction(project);
  if (!action.href) return action;

  if (action.type === 'download') {
    const a = document.createElement('a');
    a.href = action.href;
    a.download = `${project.id}.apk`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } else {
    window.open(action.href, '_blank', 'noopener,noreferrer');
  }
  return action;
}
