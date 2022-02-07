const audioPlayer = document.querySelector("body");
const audio = new Audio();
const imgPause = document.querySelector("#play-pause");
let isPlay = false;
const songs = ["./assets/audio/beyonce.mp3","./assets/audio/dontstartnow.mp3"];
const nameArtist = document.querySelector(".song-artist");
const nameSongs = document.querySelector(".song-title");
const nameImg = document.querySelector("#thumbnail");
const imgBack = document.querySelector("#background");
let playNum = 0;

function playPause() {
    if(isPlay === false){
        if(playNum < 0){
            playNum = 1;
        }else if(playNum > 1){
            playNum = 0;
        }
        if(playNum === 1){
            nameArtist.textContent = "Beyonce";
            nameSongs.textContent = "Don't Hurt Yourself";
            nameImg.src = "./assets/img/lemonade.png";
            imgBack.src = "./assets/img/lemonade.png";
        }else{
            nameArtist.textContent = "Dua Lipa";
            nameSongs.textContent = "Don't Start Now";
            nameImg.src = "./assets/img/dontstartnow.png";
            imgBack.src = "./assets/img/dontstartnow.png";
        }
        audio.src = songs[playNum];
        audio.currentTime = 0;
        audio.play();
        imgPause.src = "./assets/svg/pause.png";
        isPlay = true;

    }else{
        audio.pause();
        imgPause.src = "./assets/svg/play.png";
        isPlay = false;
    }
}

function nextSong() {
    playNum++;
    playPause();
    console.log(playNum);
}

function previousSong() {
    playNum--;
    playPause();
}
