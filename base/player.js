window.player = {
    cover: document.querySelector(".card-image"),
    title: document.querySelector(".card-content h5"),
    artist: document.querySelector(".artist"),
    audio: document.querySelector("audio"),
    audioData: audios,
    currentAudio: { },
    start() {
        this.currentAudio = this.audioData[0]

        this.cover.style.background = `url('${path(this.currentAudio.cover)}') no-repeat center center / cover`
        this.cover.style.height = `40vh`
        this.title.innerText = path(this.currentAudio.title);
        this.artist.innerText = path(this.currentAudio.artist);
        this.audio.src = path(this.currentAudio.file);
    }
}
