export function buildPlayer (video, player, videojs) {
    window.videojs = videojs
    require('videojs-overlay')
    console.log("Julien adding overlay")
    player.overlay({
        overlays: [{
            content: '<span class="icon icon-logo"></span>',
            align: 'bottom-right',
            start: 0,
            end: 'ended',
            showBackground: false,
            class: 'pocketnet-logo-video-player'
        }]
    })
}
