export const onRouteUpdate = ({ location }) => {
  // 1. Map your page paths to the specific 'settings' string you copied
  const widgetFingerprints = {
    '/login': 'eyJTY2hvb2xJRCI6InNjaF9sWHBKeiIsIldlYnNpdGVJRCI6Indic19WbjVKWCIsIldlYnNpdGVCbG9ja0lEIjoid2JiX3pnODU1SkYifQ%3d%3d',
    '/sign-up': 'eyJTY2hvb2xJRCI6InNjaF9sWHBKeiIsIldlYnNpdGVJRCI6Indic19WbjVKWCIsIldlYnNpdGVCbG9ja0lEIjoid2JiX3pnN3IzSjQifQ%3d%3d',
    '/calendar': 'eyJTY2hvb2xJRCI6InNjaF9sWHBKeiIsIldlYnNpdGVJRCI6Indic19WbjVKWCIsIldlYnNpdGVCbG9ja0lEIjoid2JiX3pnN3I1SlIifQ%3d%3d'
  };

  const currentPageFingerprint = widgetFingerprints[location.pathname];

  // 2. Find every My Music Staff iframe on the page
  const allIframes = document.querySelectorAll('iframe[src*="mymusicstaff.com"]');

  allIframes.forEach((iframe) => {
    // 3. Extract the settings from this specific iframe's URL
    const url = new URL(iframe.src);
    const iframeSettings = url.searchParams.get('settings');

    // Logic A: If we are on a page that shouldn't have a widget, kill it.
    if (!currentPageFingerprint) {
      iframe.remove();
      return;
    }

    // Logic B: If the iframe's settings don't match the current page's fingerprint, kill it.
    if (iframeSettings !== currentPageFingerprint) {
      iframe.remove();
    }
  });
};
