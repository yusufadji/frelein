const radio_wrapper = document.querySelector(".radio_wrapper"),
musicImg = radio_wrapper.querySelector(".img-area img"),
musicName = radio_wrapper.querySelector(".song-details .name"),
musicDate = radio_wrapper.querySelector(".song-details .radio_oa"),
musicArtist = radio_wrapper.querySelector(".song-details .artist"),
playPauseBtn = radio_wrapper.querySelector(".play-pause"),
playPauseBtnImg = radio_wrapper.querySelector("#play-pause-image"),
prevBtn = radio_wrapper.querySelector("#prev"),
nextBtn = radio_wrapper.querySelector("#next"),
mainAudio = radio_wrapper.querySelector("#main-audio"),
progressArea = radio_wrapper.querySelector(".progress-area"),
progressBar = progressArea.querySelector(".progress-bar"),
musicList = radio_wrapper.querySelector(".music-list"),
moreMusicBtn = radio_wrapper.querySelector("#more-music"),
closemoreMusic = musicList.querySelector("#close");

//Playlist radio
let allMusic = [
  {
    name: "TOKYO FM - HOIMIIPAN #1",
    artist: "Sasaki Mirei",
    radio_oa: "5 November 2021",
    img: "https://avrecxjx.sirv.com/IayT6bKDAY/AJSKhfv9742/hoimiipan.jpg",
    src: "https://docs.google.com/uc?export=open&id=1Gu9OtTgY5aU8bTCI_KsNwXGVTDFOO7px",
  },
  {
    name: "TOKYO FM - HOIMIIPAN #2",
    artist: "Sasaki Mirei",
    radio_oa: "12 November 2021",
    img: "https://avrecxjx.sirv.com/IayT6bKDAY/AJSKhfv9742/hoimiipan.jpg",
    src: "https://docs.google.com/uc?export=open&id=1994gzTL1kv41hXl6mnjQ2z253AEHM1mF",
  },
  {
    name: "TOKYO FM - HOIMIIPAN #3",
    artist: "Sasaki Mirei",
    radio_oa: "19 November 2021",
    img: "https://avrecxjx.sirv.com/IayT6bKDAY/AJSKhfv9742/hoimiipan.jpg",
    src: "https://docs.google.com/uc?export=open&id=1JnBym36dYR1Oi4_8_qWkbBr7byl8if-U",
  },
  {
    name: "TOKYO FM - HOIMIIPAN #4",
    artist: "Sasaki Mirei",
    radio_oa: "26 November 2021",
    img: "https://avrecxjx.sirv.com/IayT6bKDAY/AJSKhfv9742/hoimiipan.jpg",
    src: "https://docs.google.com/uc?export=open&id=1IeHBo2xMe2mu5ndLPXZDf2xOqKqGHva3",
  },
  {
    name: "TOKYO FM - HOIMIIPAN #5",
    artist: "Sasaki Mirei",
    radio_oa: "3 Desember 2021",
    img: "https://avrecxjx.sirv.com/IayT6bKDAY/AJSKhfv9742/hoimiipan.jpg",
    src: "https://docs.google.com/uc?export=open&id=1etBa1Z8J9gKFXiT2qGIjAF-ERou8roBX",
  },
  {
    name: "TOKYO FM - HOIMIIPAN #6",
    artist: "Sasaki Mirei",
    radio_oa: "10 Desember 2021",
    img: "https://avrecxjx.sirv.com/IayT6bKDAY/AJSKhfv9742/hoimiipan.jpg",
    src: "https://docs.google.com/uc?export=open&id=1PQEd5FrV3c-J7EZjnBkv5XNc0d9g0vV0",
  },
  {
    name: "TOKYO FM - HOIMIIPAN #7",
    artist: "Sasaki Mirei",
    radio_oa: "17 Desember 2021",
    img: "https://avrecxjx.sirv.com/IayT6bKDAY/AJSKhfv9742/hoimiipan.jpg",
    src: "https://docs.google.com/uc?export=open&id=1AEnUIl-8gKgbgA-tYZuvvNgqGNjuuhDN",
  },
  {
    name: "TOKYO FM - HOIMIIPAN #8",
    artist: "Sasaki Mirei",
    radio_oa: "24 Desember 2021",
    img: "https://avrecxjx.sirv.com/IayT6bKDAY/AJSKhfv9742/hoimiipan.jpg",
    src: "https://docs.google.com/uc?export=open&id=1hGo9naH8Lg01jbGvRFNU-1_uVBxdx0ik",
  },
  {
    name: "TOKYO FM - HOIMIIPAN #9",
    artist: "Sasaki Mirei",
    radio_oa: "31 Desember 2021",
    img: "https://avrecxjx.sirv.com/IayT6bKDAY/AJSKhfv9742/hoimiipan.jpg",
    src: "https://docs.google.com/uc?export=open&id=1IGIYJS9YMBGO445DqR2lk2ruI_Yqljpk",
  },
  {
    name: "TOKYO FM - HOIMIIPAN #10",
    artist: "Sasaki Mirei",
    radio_oa: "7 Januari 2022",
    img: "https://avrecxjx.sirv.com/IayT6bKDAY/AJSKhfv9742/hoimiipan.jpg",
    src: "https://docs.google.com/uc?export=open&id=1pr9qclg7YnCcAMw6zVicSKIHLspAU3m-",
  },
  {
    name: "TOKYO FM - HOIMIIPAN #11",
    artist: "Sasaki Mirei",
    radio_oa: "14 Januari 2022",
    img: "https://avrecxjx.sirv.com/IayT6bKDAY/AJSKhfv9742/hoimiipan.jpg",
    src: "https://docs.google.com/uc?export=open&id=12AvsS8iQojSUC1hqimYuFczXiN_rQZ4z",
  },
  {
    name: "TOKYO FM - HOIMIIPAN #12",
    artist: "Sasaki Mirei",
    radio_oa: "21 Januari 2022",
    img: "https://avrecxjx.sirv.com/IayT6bKDAY/AJSKhfv9742/hoimiipan.jpg",
    src: "https://docs.google.com/uc?export=open&id=1hOXfOnsg-mI_B9wZWsm1MHvv9ForsYbe",
  },
  {
    name: "TOKYO FM - HOIMIIPAN #13",
    artist: "Sasaki Mirei",
    radio_oa: "28 Januari 2022",
    img: "https://avrecxjx.sirv.com/IayT6bKDAY/AJSKhfv9742/hoimiipan.jpg",
    src: "https://docs.google.com/uc?export=open&id=1z10B-ZKL4Qt6WB7VwrIpNka1fA8rwDiy",
  },
  {
    name: "Rekomen (レコメン!)",
    artist: "Kato Shiho",
    radio_oa: "1 Februari 2022",
    img: "https://avrecxjx.sirv.com/IayT6bKDAY/AJSKhfv9742/rekomen-20220201.jpg",
    src: "https://docs.google.com/uc?export=open&id=17ZchypBynX5jLoLl5n3wCIQyvv8ELeJH",
  },
  {
    name: "TOKYO FM - HOIMIIPAN #14",
    artist: "Sasaki Mirei",
    radio_oa: "4 Februari 2022",
    img: "https://avrecxjx.sirv.com/IayT6bKDAY/AJSKhfv9742/hoimiipan.jpg",
    src: "https://docs.google.com/uc?export=open&id=1bKd1c9eshTm1ZqtXcAvHsZH6uubzGOVx",
  },
];

//Radio controller
let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
isMusicPaused = true;

window.addEventListener("load", ()=>{
  loadMusic(musicIndex);
  playingSong(); 
});

function loadMusic(indexNumb){
  musicName.innerText = allMusic[indexNumb - 1].name;
  musicArtist.innerText = allMusic[indexNumb - 1].artist;
  musicDate.innerText = allMusic[indexNumb - 1].radio_oa;
  musicImg.src = `${allMusic[indexNumb - 1].img}?profile=radioimg`;
  mainAudio.src = `${allMusic[indexNumb - 1].src}`;
}

//play music function
function playMusic(){
  radio_wrapper.classList.add("paused");
  playPauseBtn.getAttribute("data_action","pause");
  playPauseBtnImg.setAttribute("d","M14,19H18V5H14M6,19H10V5H6V19Z");
  mainAudio.play();
}

//pause music function
function pauseMusic(){
  radio_wrapper.classList.remove("paused");
  playPauseBtn.getAttribute("data_action","play_arrow");
  playPauseBtnImg.setAttribute("d","M8,5.14V19.14L19,12.14L8,5.14Z");
  mainAudio.pause();
}

//prev music function
function prevMusic(){
  musicIndex--; //decrement of musicIndex by 1
  //if musicIndex is less than 1 then musicIndex will be the array length so the last music play
  musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
  loadMusic(musicIndex);
  playMusic();
  playingSong(); 
}

//next music function
function nextMusic(){
  musicIndex++; //increment of musicIndex by 1
  //if musicIndex is greater than array length then musicIndex will be 1 so the first music play
  musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
  loadMusic(musicIndex);
  playMusic();
  playingSong(); 
}

// play or pause button event
playPauseBtn.addEventListener("click", ()=>{
  const isMusicPlay = radio_wrapper.classList.contains("paused");
  //if isPlayMusic is true then call pauseMusic else call playMusic
  isMusicPlay ? pauseMusic() : playMusic();
  playingSong();
});

//prev music button event
prevBtn.addEventListener("click", ()=>{
  prevMusic();
});

//next music button event
nextBtn.addEventListener("click", ()=>{
  nextMusic();
});

// update progress bar width according to music current time
mainAudio.addEventListener("timeupdate", (e)=>{
  const currentTime = e.target.currentTime; //getting playing song currentTime
  const duration = e.target.duration; //getting playing song total duration
  let progressWidth = (currentTime / duration) * 100;
  progressBar.style.width = `${progressWidth}%`;

  let musicCurrentTime = radio_wrapper.querySelector(".current-time"),
  musicDuartion = radio_wrapper.querySelector(".max-duration");
  mainAudio.addEventListener("loadeddata", ()=>{
    // update song total duration
    let mainAdDuration = mainAudio.duration;
    let totalMin = Math.floor(mainAdDuration / 60);
    let totalSec = Math.floor(mainAdDuration % 60);
    if(totalSec < 10){ //if sec is less than 10 then add 0 before it
      totalSec = `0${totalSec}`;
    }
    musicDuartion.innerText = `${totalMin}:${totalSec}`;
  });
  // update playing song current time
  let currentMin = Math.floor(currentTime / 60);
  let currentSec = Math.floor(currentTime % 60);
  if(currentSec < 10){ //if sec is less than 10 then add 0 before it
    currentSec = `0${currentSec}`;
  }
  musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});

// update playing song currentTime on according to the progress bar width
progressArea.addEventListener("click", (e)=>{
  let progressWidth = progressArea.clientWidth; //getting width of progress bar
  let clickedOffsetX = e.offsetX; //getting offset x value
  let songDuration = mainAudio.duration; //getting song total duration
  
  mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
  playMusic(); //calling playMusic function
  playingSong();
});

//change loop, shuffle, repeat icon onclick
const repeatBtn = radio_wrapper.querySelector("#repeat-plist");
const repeatBtnImg = radio_wrapper.querySelector("#repeator-image");
repeatBtn.addEventListener("click", ()=>{
  let getText = repeatBtn.getAttribute("data-action"); //getting this tag innerText
  switch(getText){
    case "repeat":
      repeatBtn.setAttribute("data-action","repeat_one");
      repeatBtn.setAttribute("title", "Song looped");
      repeatBtnImg.setAttribute("d", "M13,15V9H12L10,10V11H11.5V15M17,17H7V14L3,18L7,22V19H19V13H17M7,7H17V10L21,6L17,2V5H5V11H7V7Z");
      break;
    case "repeat_one":
      repeatBtn.setAttribute("data-action","shuffle");
      repeatBtn.setAttribute("title", "Playback shuffled");
      repeatBtnImg.setAttribute("d", "M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z");
      break;
    case "shuffle":
      repeatBtn.setAttribute("data-action","repeat");
      repeatBtn.setAttribute("title", "Playlist looped");
      repeatBtnImg.setAttribute("d", "M17,17H7V14L3,18L7,22V19H19V13H17M7,7H17V10L21,6L17,2V5H5V11H7V7Z");
      break;
  }
});

//code for what to do after song ended
mainAudio.addEventListener("ended", ()=>{
  // we'll do according to the icon means if user has set icon to
  // loop song then we'll repeat the current song and will do accordingly
  let getText = repeatBtn.innerText; //getting this tag innerText
  switch(getText){
    case "repeat":
      nextMusic(); //calling nextMusic function
      break;
    case "repeat_one":
      mainAudio.currentTime = 0; //setting audio current time to 0
      loadMusic(musicIndex); //calling loadMusic function with argument, in the argument there is a index of current song
      playMusic(); //calling playMusic function
      break;
    case "shuffle":
      let randIndex = Math.floor((Math.random() * allMusic.length) + 1); //genereting random index/numb with max range of array length
      do{
        randIndex = Math.floor((Math.random() * allMusic.length) + 1);
      }while(musicIndex == randIndex); //this loop run until the next random number won't be the same of current musicIndex
      musicIndex = randIndex; //passing randomIndex to musicIndex
      loadMusic(musicIndex);
      playMusic();
      playingSong();
      break;
  }
});

//show music list onclick of music icon
moreMusicBtn.addEventListener("click", ()=>{
  musicList.classList.toggle("show");
});
closemoreMusic.addEventListener("click", ()=>{
  musicList.classList.toggle("show");
});

const ulTag = radio_wrapper.querySelector("ul");
// let create li tags according to array length for list
for (let i = 0; i < allMusic.length; i++) {
  //let's pass the song name, artist from the array
  let liTag = `<li li-index="${i + 1}">
                <div class="row">
                  <span>${allMusic[i].name}</span>
                  <small>${allMusic[i].radio_oa}</small>
                  <p>${allMusic[i].artist}</p>
                </div>
              </li>`;
  ulTag.insertAdjacentHTML("beforeend", liTag); //inserting the li inside ul tag
}

//play particular song from the list onclick of li tag
function playingSong(){
  const allLiTag = ulTag.querySelectorAll("li");
  
  for (let j = 0; j < allLiTag.length; j++) {
    
    if(allLiTag[j].classList.contains("playing")){
      allLiTag[j].classList.remove("playing");
    }

    //if the li tag index is equal to the musicIndex then add playing class in it
    if(allLiTag[j].getAttribute("li-index") == musicIndex){
      allLiTag[j].classList.add("playing");
    }

    allLiTag[j].setAttribute("onclick", "clicked(this)");
  }
}

//particular li clicked function
function clicked(element){
  let getLiIndex = element.getAttribute("li-index");
  musicIndex = getLiIndex; //updating current song index with clicked li index
  loadMusic(musicIndex);
  playMusic();
  playingSong();
}