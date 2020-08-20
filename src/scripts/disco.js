import { disco } from '../assets/sources';

export const setDisco = (index) => () => {
  const modal = document.querySelector('#modal-disco');
  modal.style.display = 'block';
  $('#title-disco').html(disco[index].title);
  $('#musics').html(disco[index].data);
  $('#link-album').attr('href', disco[index].link);
};

export const closeModal = () => {
  const modal = document.querySelector('#modal-disco');
  modal.style.display = 'none';
};
