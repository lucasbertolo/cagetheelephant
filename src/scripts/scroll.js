function getOffsetTop() {
  const members = document.querySelector('#members').offsetTop;
  const about = document.querySelector('#about').offsetTop;
  const home = document.querySelector('#home').offsetTop;
  const contact = document.querySelector('#contact').offsetTop;
  const calendar = document.querySelector('#calendar').offsetTop;
  const disco = document.querySelector('#disco').offsetTop;

  return {
    members,
    about,
    home,
    contact,
    calendar,
    disco,
  };
}

function getDistance(items) {
  return { ...items, distance: window.scrollY };
}

function checkRegion(items) {
  const { offsets, distance } = items;
  if (distance < offsets.home) {
    return { ...items, section: 'home' };
  }
  if (distance < offsets.about) {
    return { items, section: 'about' };
  }
  if (distance < offsets.members) {
    return { items, section: 'members' };
  }
  if (distance < offsets.disco) {
    return { items, section: 'disco' };
  }
  if (distance < offsets.calendar) {
    return { items, section: 'calendar' };
  }
  return { items, section: 'contact' };
}

const setScrollspy = (items) => {
  const sectionsOrd = [
    'home',
    'about',
    'members',
    'disco',
    'calendar',
    'contact',
  ];
  const getIdx = sectionsOrd.findIndex((s) => s === items.section);

  document.querySelector(`#icon-${items.section}`)
    .classList.add('icon-scrollspy');

  if (getIdx > 0) {
    document.querySelector(`#icon-${sectionsOrd[getIdx - 1]}`)
      .classList.remove('icon-scrollspy');
  }
  if (getIdx < sectionsOrd.length - 1) {
    document.querySelector(`#icon-${sectionsOrd[getIdx + 1]}`)
      .classList.remove('icon-scrollspy');
  }
};

const compose = (f, g) => (...args) => f(g(...args));

function handleSrollspy(...fns) {
  return fns.reduce(compose);
}

export function onScroll() {
  const checkOffset = getOffsetTop();

  return () => handleSrollspy(
    setScrollspy,
    checkRegion,
    getDistance,
  )({ offsets: checkOffset });
}

function scrollTo(offset) {
  window.scroll({
    top: offset - 50,
    left: 0,
    behavior: 'smooth',
  });
}

export function SmoothVerticalScrolling(e, time) {
  const offsets = getOffsetTop();
  const sectionOffset = offsets[e];
  let curTime = 0;
  while (curTime <= time) {
    window.setTimeout(scrollTo, curTime, sectionOffset);
    curTime += time / 100;
  }
}
