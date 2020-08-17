// MEMBROS
import { members } from '../assets/sources';

$('.content-membros').hover(
  () => {
    $('.typing').addClass('typewritter');
  },
  () => {
    $('.typing').removeClass('typewritter');
  },
);

// eslint-disable-next-line array-callback-return
members.map((member, idx) => {
  $(`#member-${idx + 1}`).on('click', () => {
    $('#nameMember').html(member.name);
    $('#img-member').attr('src', member.img);
    $('#job').html(member.instrument);
    $('#bio').html(member.bio);
  });
});
