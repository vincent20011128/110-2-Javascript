let track_image = document.querySelector('#track_image');
let present = document.querySelector('#present');
let total = document.querySelector('total');
let title = document.querySelector('#title');
let artist = document.querySelector('#artist');
let pre = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let auto = document.querySelector('#auto');
let duration_slider = document.querySelector('#duration_slider');
let volume_show = document.querySelector('#volume_show');

// 預設為第一首歌，0代表是陣列第一個
let index_number = 0;

// 預設歌曲不撥放
let playingSong = false;

// 產生一個新的audio HTML標籤
let track = document.createElement('audio');

// 產生一格陣列來放所有的歌
let allSong = [
  {
    name: '夜曲',
    src: 'music/nocturne.mp3',
    img: 'img/nocturne.jpeg',
    artist: '周杰倫',
  },
  {
    name: '挪威的森林',
    src: 'music/norwegian_forest.mp3',
    img: 'img/norwegian_forest.jpeg',
    artist: '伍佰',
  },
];

// 寫一個方法來將陣列的資料轉換給HTML使用
function loadTrack(indexNumber) {
  track.src = allSong[indexNumber].src;
  title.innerHTML = allSong[indexNumber].name;
  track_image.src = allSong[indexNumber].img;
  artist.innerHTML = allSong[indexNumber].artist;
  total.innerHTML = allSong.length;
  present.innerHTML = indexNumber + 1;
  // 陣列第一項為0 ，因此需要+1
}

loadTrack(indexNumber);

function playSong() {
  track.play();
  playingSong = true;
  play.innerHTML = '<i class = "fa fa-pause" aria-hidden="true">';
}

function playSong() {
  track.play();
  playingSong = false;
  play.innerHTML = '<i class = "fa fa-pause" aria-hidden="true">';
}

function justPlay() {
  if (playingSong == false) {
    playSong();
  } else {
    pauseSong();
  }
}
