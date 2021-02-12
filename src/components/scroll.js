const getScroll = () => {
  let goTopBtn = document.querySelector('.back_to_top');
  let scrolled = window.pageYOffset;

  if (scrolled > 400) {
    goTopBtn.classList.add('back_to_top-show');
  };
  if (scrolled < 400) {
    goTopBtn.classList.remove('back_to_top-show');
  };
};

const backToTop = () => {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -100);
    var time = setTimeout(backToTop, 20);
  } else {
    clearTimeout(time);
  };
};

export { getScroll, backToTop };



