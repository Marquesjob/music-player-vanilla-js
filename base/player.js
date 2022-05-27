import audioData from "./data.js";
import { path, convertFormat } from "./utills.js";
import elements from "./playerElements.js";

export default {
    cover: document.querySelector(".card-image"),
    title: document.querySelector(".card-content h5"),
    artist: document.querySelector(".artist"),
    audio: document.querySelector("audio"),
    audioData: audioData,
    currentAudio: {},
    currentPlaying: 0,
    isPlaying: false,
    start() {
        elements.get.call(this);
        this.update(); 
       
    },
    play (){
        this.isPlaying = true;
        this.audio.play(); 
        this.playPause.innerText = "pause";
    },
    pause(){
        this.isPlaying = false;
        this.audio.pause();
        this.playPause.innerText = "play_arrow";
    },
    togglePlayPause(){
        this.isPlaying ? this.pause() : this.play();
    },
    toggleMute(){
        this.audio.muted = !this.audio.muted;
        this.mute.innerText = this.audio.muted ? "volume_mute" : "volume_up";
    },
    next () {
        this.currentPlaying++;
        if (this.currentPlaying == this.audioData.length){ // Verifica se o index indicado corresponde ao número de itens dentro do objeto.
            this.restart();                                // se for, retorna o valor para 0, voltando o player para a primeira faixa.  
        }                                                         
        this.update();
        this.audio.play();      
    },
    setVolume (value){
        this.audio.volume = value / 100;
    },
    setSeek (value){
        this.audio.currentTime = value;
    },
    timeUpdate (){
        this.currentDuration.innerText = convertFormat(this.audio.currentTime);
        this.seekbar.value = this.audio.currentTime;
    },
    update() { 
        this.currentAudio = this.audioData[this.currentPlaying];

        this.cover.style.background = `url('${path(this.currentAudio.cover)}') no-repeat center center / cover`;
        this.cover.style.height = `40vh`;
        this.title.innerText = this.currentAudio.title;
        this.artist.innerText = this.currentAudio.artist;
        elements.createAudioElement.call(this, path(this.currentAudio.file));
        this.audio.onloadeddata = () => {
            elements.actions.call(this);
        }
    },
    restart(){
        this.currentPlaying = 0;
        this.update();
    }
}



