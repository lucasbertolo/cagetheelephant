/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import { videoPlayer, changeVideo, handleVolume } from './video.js';
import { setHover, removeHover, handleSmoothScroll } from './scroll.js';
import { setDisco } from './disco.js';
import { handleConcerts, changeMarker, initMap } from './calendar.js';

// // GOOGLE MAP

// SCROLL CONTENT ABOUT
// (function ($) {
//   $(window).on('load', () => {
//     $('.content-sobre').mCustomScrollbar({
//       theme: 'dark',
//     });
//   });
// }(jQuery));

$(window).on('load', () => {
  initMap();
  window.addEventListener('load', changeMarker);
});

$(document).ready(() => {
  $('a').on('click', handleSmoothScroll);
  // $('[data-toggle="tooltip"]').tooltip({
  //   html: true,
  //   delay: { show: 500, hide: 100 },
  // });

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
