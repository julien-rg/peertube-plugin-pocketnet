const shared = require('./shared-player')

function register ({ registerHook }) {
  // When an embed player is loaded, add the Pocketnet logo in the bottom right corner
  registerHook({
    target: 'action:embed.player.loaded',
    handler: ({ player, videojs, video }) => shared.buildPlayer(video, player, videojs)
  })
}

export {
  register
}
