// MEMBROS
import { members } from '../assets/sources';

export const setMember = (name) => () => {
  const infoMember = members.find((s) => s.name.toLowerCase().split(' ')[0] === name);
  $('#nameMember').html(infoMember.name);
  $('#img-member').attr('src', infoMember.img);
  $('#job').html(infoMember.instrument);
  $('#bio').html(infoMember.bio);
};
