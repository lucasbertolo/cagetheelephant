import { videoPlayer, changeVideo, handleVolume } from './video';
import { setHover, removeHover, handleSmoothScroll } from './scroll';
import { setDisco } from './disco';
import { setMember } from './members';
import { handleConcerts, changeMarker, initMap } from './calendar';

$(window).on('load', () => {
  initMap();
  window.addEventListener('load', changeMarker);
});

$(document).ready(() => {
  $('a').on('click', handleSmoothScroll);

  // VIDEO
  const playVideo = changeVideo();

  $('#forward').on('click', playVideo);
  $('#back').on('click', () => playVideo(false));
  $('#play').on('click', videoPlayer);
  $('#volume').on('click', handleVolume);

  // SCROLLSPY
  $('#home').hover(setHover('home'), removeHover('home'));
  $('#about').hover(setHover('about'), removeHover('about'));
  $('#members').hover(setHover('members'), removeHover('members'));
  $('#disco').hover(setHover('disco'), removeHover('disco'));
  $('#calendar').hover(setHover('calendar'), removeHover('calendar'));
  $('#contact').hover(setHover('contact'), removeHover('contact'));

  // MEMBERS
  $('#member-1').on('click', setMember('brad'));
  $('#member-2').on('click', setMember('daniel'));
  $('#member-3').on('click', setMember('jared'));
  $('#member-4').on('click', setMember('matthan'));
  $('#member-5').on('click', setMember('matt'));

  // DISCO
  $('#disco-1').on('click', setDisco(0));
  $('#disco-2').on('click', setDisco(1));
  $('#disco-3').on('click', setDisco(2));
  $('#disco-4').on('click', setDisco(3));

  // CALENDAR

  const displayConcerts = handleConcerts();

  $('#increase-concert').on('click', displayConcerts(false));
  $('#decrease-concert').on('click', displayConcerts(true));
});
