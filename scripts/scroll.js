/* eslint-disable no-undef */
export const setHover = (name) => () => {
  $(`#icon-${name}`).addClass('icon-hover');
};

export const removeHover = (name) => () => {
  $(`#icon-${name}`).removeClass('icon-hover');
};

export function handleSmoothScroll(event) {
  if (this.hash !== '') {
    event.preventDefault();
    const { hash } = this;
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top,
      },
      1200,
      () => {
        window.location.hash = hash;
      },
    );
  }
}
