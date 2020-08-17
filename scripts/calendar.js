/* eslint-disable no-console */
/* eslint-disable no-undef */
// eslint-disable-next-line import/extensions
import { concerts } from '../assets/sources.js';

let geocoder;
let map;
let position = 'Las Vegas, NV';

export function initMap() {
  const mapOptions = {
    center: new google.maps.LatLng(40.7058316, -74.2581844, 10),
    zoom: 11,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };

  map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
  geocoder = new google.maps.Geocoder();
}

export function changeMarker() {
  const address = position;
  geocoder.geocode({ address }, (results, status) => {
    if (status === google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      google.maps.Marker({
        map,
        position: results[0].geometry.location,
      });
    } else { console.log(`Geocode was not successful for the following reason: ${status}`); }
  });
}

export function setConcert(index) {
  const { place, date, address } = concerts[index];
  const day = date.getDay();
  const month = date.toLocaleString('default', { month: 'short' });
  $('.descr-show').css('display', 'none');
  $('#data-show').html(`${day} ${month}`);
  $('#nome-show').html(place);
  $('#local-show').html(address);
  position = address;
  changeMarker();
  $('.descr-show').show(700);
}

function increaseCounter(counter) {
  if (counter === concerts.length - 1) {
    return 0;
  }
  return counter + 1;
}

function decreaseCounter(counter) {
  if (counter === 0) {
    return concerts.length - 1;
  }
  return counter - 1;
}

export const handleConcerts = () => () => {
  let counter = 0;

  return (isIncreasing = true) => {
    counter = isIncreasing
      ? increaseCounter(counter)
      : decreaseCounter(counter);
    setConcert(counter);
  };
};
