// MEMBROS
import { members } from '../assets/sources';

export const setMember = (name) => () => {
  const infoMember = members.find((s) => s.name.toLowerCase().split(' ')[0] === name);

  document.querySelector('#modal-members').style.display = 'block';
  document.querySelector('#name-member').innerHTML = infoMember.name;
  document.querySelector('#job').innerHTML = infoMember.instrument;
  document.querySelector('#bio').innerHTML = infoMember.bio;
};

export const closeModal = () => {
  const modal = document.querySelector('#modal-members');
  modal.style.display = 'none';
};
