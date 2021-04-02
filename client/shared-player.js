export function buildPlayer (video, player, videojs) {
    window.videojs = videojs
    require('videojs-overlay')
    // Disable context menu
    if (player.contextmenuUI)
        player.contextmenuUI({ content: [] })
    // Add the Pocketnet logo in the bottom right corner of the video
    player.overlay({
        overlays: [{
            content: '<span class="icon icon-full-logo-transparent"></span>',
            align: 'top-left',
            start: 0,
            showBackground: false,
            class: 'pocketnet-logo-video-player'
        }]
    })
}
