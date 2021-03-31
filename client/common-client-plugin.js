function register ({ registerHook, peertubeHelpers }) {
  // Change the favicon
  const favicon = document.querySelector('link[rel="icon"]')
  favicon.href = peertubeHelpers.getBaseStaticRoute() + '/images/pocketnet-logo.png'
}

export {
  register
}
