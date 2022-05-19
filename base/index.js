const cover = document.querySelector(".card-image");
const title = document.querySelector(".card-content h5");
const artist = document.querySelector(".artist");
const audio = document.querySelector("audio");

const data = {
    title:"Elevate!",
    artist:"Frank Bentley",
    cover:"files/hiphop-music.jpg",
    file:"files/elevate-by-frank-bentley.mp3"
};

cover.style.background = `url('${data.cover}') no-repeat center center / cover`
cover.style.height = `40vh`

title.innerText = data.title;
artist.innerText = data.artist;
audio.src = data.file;