/* eslint-disable no-undef */
// eslint-disable-next-line import/extensions
import { disco } from '../assets/sources.js';

export const setDisco = (index) => () => {
  $('#title-disco').html(disco[index].title);
  $('#musics').html(disco[index].data);
  $('#link-album').attr('href', disco[index].link);
};
