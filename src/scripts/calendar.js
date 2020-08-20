import { concerts } from '../assets/sources';

// let geocoder;
// let map;
// let position = 'Las Vegas, NV';

// export function initMap() {
//   const mapOptions = {
//     center: new google.maps.LatLng(40.7058316, -74.2581844, 10),
//     zoom: 11,
//     mapTypeId: google.maps.MapTypeId.ROADMAP,
//   };

//   map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
//   geocoder = new google.maps.Geocoder();
// }

// export function changeMarker() {
//   const address = position;
//   geocoder.geocode({ address }, (results, status) => {
//     if (status === google.maps.GeocoderStatus.OK) {
//       map.setCenter(results[0].geometry.location);
//       google.maps.Marker({
//         map,
//         position: results[0].geometry.location,
//       });
//     // eslint-disable-next-line no-console
//     } else console.log(`Geocode was not successful for the following reason: ${status}`);
//   });
// }

function animateDescription() {
  document.querySelector('.descr-show').classList.add('fadeOutWidth');
  setTimeout(() => {
    document.querySelector('.descr-show').style.width = '15%';
  }, 100);
  setTimeout(() => {
    document.querySelector('.descr-show').classList.remove('fadeOutWidth');
    document.querySelector('.descr-show').classList.add('fadeInWidth');
    document.querySelector('.descr-show').style.width = '30%';
  }, 700);
}

export function setConcert(index) {
  const { place, date, address } = concerts[index];
  const day = date.getDay();
  const month = date.toLocaleString('default', { month: 'short' });

  animateDescription();
  document.querySelector('#data-show').innerHTML = `${day} ${month}`;
  document.querySelector('#nome-show').innerHTML = place;
  document.querySelector('#local-show').innerHTML = address;
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
