import { disco } from '../assets/sources';

export const setDisco = (index) => () => {
  document.querySelector('#title-disco').innerHTML = disco[index].title;
  document.querySelector('#musics').innerHTML = disco[index].data;
  document.querySelector('#link-album').setAttribute('href', disco[index].link);
  document.querySelector('#modal-disco').style.display = 'block';
};

export const closeModal = () => {
  const modal = document.querySelector('#modal-disco');
  modal.style.display = 'none';
};
