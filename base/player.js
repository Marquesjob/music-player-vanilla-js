window.player = {
    cover: document.querySelector(".card-image"),
    title: document.querySelector(".card-content h5"),
    artist: document.querySelector(".artist"),
    audio: document.querySelector("audio"),
    audioData: audioData,
    currentAudio: {},
    currentPlaying: 0,
    start() {
        this.updateTrack();
        this.finish();
        this.next();
    },
    finish() {
        this.audio.onended = () => this.next(); 
    },
    next () {
        this.currentPlaying++;
        this.updateTrack();
        this.audio.play();    
    },
    updateTrack() {
        this.currentAudio = this.audioData[this.currentPlaying]
        this.cover.style.background = `url('${path(this.currentAudio.cover)}') no-repeat center center / cover`
        this.cover.style.height = `40vh`
        this.title.innerText = this.currentAudio.title;
        this.artist.innerText = this.currentAudio.artist;
        this.audio.src = path(this.currentAudio.file);
    }
}
