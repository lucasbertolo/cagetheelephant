import { videos } from '../assets/sources';

function setVideo(num) {
  const video = document.querySelector('#video');
  const play = document.querySelector('#play');

  const basePage = process.env.NODE_ENV === 'production' ? 'cagetheelephant/' : '';

  document.querySelector('#mp4Source').setAttribute('src', `/${basePage}src/assets/videos/${videos[num].src}`);
  document.querySelector('#music-name').textContent = videos[num].name;
  document.querySelector('#disco-name').textContent = videos[num].disco;

  play.querySelector('.fa').classList.remove('fa-play');
  play.querySelector('.fa').classList.add('fa-pause');

  video.load();
  video.play();
}
function increaseCounter(counter) {
  if (counter === videos.length - 1) {
    return 0;
  }
  return counter + 1;
}

function decreaseCounter(counter) {
  if (counter === 0) {
    return videos.length - 1;
  }
  return counter - 1;
}

export function changeVideo() {
  let counter = 0;

  return (isIncreasing = true) => {
    counter = isIncreasing
      ? increaseCounter(counter)
      : decreaseCounter(counter);
    setVideo(counter);
  };
}

export function videoPlayer() {
  const video = document.querySelector('#video');
  const play = document.querySelector('#play');

  if (video.paused) {
    video.play();
    play.querySelector('.fa').classList.remove('fa-play');
    play.querySelector('.fa').classList.add('fa-pause');
  } else {
    video.pause();
    play.querySelector('.fa').classList.remove('fa-pause');
    play.querySelector('.fa').classList.add('fa-play');
  }
}

export function handleVolume() {
  const video = document.querySelector('#video');
  const volume = document.querySelector('#volume');

  if (!video.muted) {
    video.muted = true;
    volume.querySelector('.fa').classList.remove('fa-volume-up');
    volume.querySelector('.fa').classList.add('fa-volume-off');
  } else {
    video.muted = false;
    volume.querySelector('.fa').classList.remove('fa-volume-off');
    volume.querySelector('.fa').classList.add('fa-volume-up');
  }
}
