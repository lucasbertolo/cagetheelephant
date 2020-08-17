import { disco } from '../assets/sources';

export const setDisco = (index) => () => {
  $('#title-disco').html(disco[index].title);
  $('#musics').html(disco[index].data);
  $('#link-album').attr('href', disco[index].link);
};
