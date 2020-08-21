import { videoPlayer, changeVideo, handleVolume } from './video';
import { onScroll, SmoothVerticalScrolling } from './scroll';
import * as disco from './disco';
import * as members from './members';
import { handleConcerts } from './calendar';
import { concerts } from '../assets/sources';

/* EVENTS */

window.initMap = () => {
  const { coords } = concerts[0];
  // eslint-disable-next-line no-undef
  const map = new google.maps.Map(
    document.getElementById('googleMap'), { zoom: 4, center: coords },
  );

  // eslint-disable-next-line no-undef
  const marker = new google.maps.Marker({ position: coords, map });
  return marker;
};

window.onload = () => {
  window.initMap();
};

// SCROLL
const sections = ['home', 'about', 'members', 'disco', 'calendar', 'contact'];

sections.forEach((section) => {
  document
    .querySelector(`#nav-${section}`)
    .addEventListener('click', () => SmoothVerticalScrolling(section, 475));
});

const scroll = onScroll();
window.onscroll = () => scroll();

// MODALS
document
  .querySelector('#modal-members')
  .addEventListener('click', members.closeModal);

document
  .querySelector('#modal-disco')
  .addEventListener('click', disco.closeModal);

// VIDEO
const playVideo = changeVideo();

document
  .querySelector('#video')
  .addEventListener('ended', playVideo);
document
  .querySelector('#back')
  .addEventListener('click', () => playVideo(false));
document
  .querySelector('#forward')
  .addEventListener('click', playVideo);
document
  .querySelector('#play')
  .addEventListener('click', videoPlayer);
document
  .querySelector('#volume')
  .addEventListener('click', handleVolume);

// MEMBERS
const names = ['brad', 'daniel', 'jared', 'matthan', 'matt'];

for (let i = 1; i <= names.length; i++) {
  document
    .querySelector(`#member-${i}`)
    .addEventListener('click', members.setMember(names[i - 1]));
}

// DISCO
for (let i = 0; i < 4; i++) {
  document
    .querySelector(`#disco-${i + 1}`)
    .addEventListener('click', disco.setDisco(i));
}

// CALENDAR
const displayConcerts = handleConcerts();

document
  .querySelector('#increase-concert')
  .addEventListener('click', displayConcerts(false));
document
  .querySelector('#decrease-concert')
  .addEventListener('click', displayConcerts(true));
