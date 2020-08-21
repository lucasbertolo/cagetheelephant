import { concerts } from '../assets/sources';

function changeMarker(coords) {
  // eslint-disable-next-line no-undef
  const map = new google.maps.Map(
    document.getElementById('googleMap'), { zoom: 4, center: coords },
  );
  // eslint-disable-next-line no-undef
  const marker = new google.maps.Marker({ position: coords, map });
  return marker;
}

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
  const {
    place, date, address, coords,
  } = concerts[index];

  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });

  animateDescription();
  changeMarker(coords);
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
