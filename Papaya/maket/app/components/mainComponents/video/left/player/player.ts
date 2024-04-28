const YTPlayer = require('yt-player');

export function createPlayer(videoId: string) {
    const player = new YTPlayer('#player', {
        annotations: false,
    });
    player.load(videoId);
}
