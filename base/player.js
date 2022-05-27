window.player = {
    cover: document.querySelector(".card-image"),
    title: document.querySelector(".card-content h5"),
    artist: document.querySelector(".artist"),
    audio: document.querySelector("audio"),
    audioData: audioData,
    currentAudio: {},
    currentPlaying: 0,
    start() {
        this.update(); 
        this.audio.onended = () => this.next(); 
    },
    next () {
        this.currentPlaying++;
        if (this.currentPlaying == this.audioData.length){ // Verifica se o index indicado corresponde ao número de itens dentro do objeto.
            this.restart();                                // se for, retorna o valor para 0, assim voltando o player para a primeira faixa.  
        }                                                         
        this.update();
        this.audio.play();      
    },
    update() { 
        this.currentAudio = this.audioData[this.currentPlaying];

        this.cover.style.background = `url('${path(this.currentAudio.cover)}') no-repeat center center / cover`;
        this.cover.style.height = `40vh`;
        this.title.innerText = this.currentAudio.title;
        this.artist.innerText = this.currentAudio.artist;
        this.audio.src = path(this.currentAudio.file);
    },
    restart(){
        this.currentPlaying = 0;
        this.update();
    }
}

