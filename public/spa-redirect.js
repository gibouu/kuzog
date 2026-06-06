// GitHub Pages SPA redirect handler.
// Reads ?redirect= from sessionStorage (set by 404.html) and rewrites
// the URL so React Router can route to the requested path.
(function() {
  try {
    var redirect = window.sessionStorage ? sessionStorage.getItem('redirect') : null;
    if (redirect) {
      sessionStorage.removeItem('redirect');
      history.replaceState(null, null, redirect);
    }
  } catch (error) {
    // sessionStorage can throw in privacy-restricted contexts; ignore and continue rendering.
    console.warn('SPA redirect storage unavailable', error);
  }
})();
