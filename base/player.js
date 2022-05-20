window.player = {
    cover: document.querySelector(".card-image"),
    title: document.querySelector(".card-content h5"),
    artist: document.querySelector(".artist"),
    audio: document.querySelector("audio"),
    data: {
        title:"Elevate!",
        artist:"Frank Bentley",
        gender: "hip-hop",
        cover:"files/hiphop-music.jpg",
        file:"files/elevate-by-frank-bentley.mp3"
    },
    start: function () {
        this.cover.style.background = `url('${this.data.cover}') no-repeat center center / cover`
        this.cover.style.height = `40vh`
        this.title.innerText = this.data.title;
        this.artist.innerText = this.data.artist;
        this.audio.src = this.data.file;
    }
}