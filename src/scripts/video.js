import { videos } from '../assets/sources';

function setVideo(num) {
  const video = $('#video').get(0);
  $('#mp4Source').attr('src', `../src/assets/videos/${videos[num].src}`);
  $('#music-name').text(videos[num].name);
  $('#disco-name').text(videos[num].disco);
  $('#play').find($('.fa')).removeClass('fa-play').addClass('fa-pause');
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
  const video = $('#video').get(0);

  if (video.paused) {
    video.play();
    $(this).find($('.fa')).removeClass('fa-play').addClass('fa-pause');
  } else {
    video.pause();
    $(this).find($('.fa')).removeClass('fa-pause').addClass('fa-play');
  }
}

export function handleVolume() {
  const video = $('#video').get(0);

  if (!video.muted) {
    video.muted = true;
    $(this)
      .find($('.fa'))
      .removeClass('fa-volume-up')
      .addClass('fa-volume-off');
  } else {
    video.muted = false;
    $(this)
      .find($('.fa'))
      .removeClass('fa-volume-off')
      .addClass('fa-volume-up');
  }
}
