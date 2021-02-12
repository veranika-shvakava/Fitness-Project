const moveSlider = (indexItem = 0, triggerSlide, widthItem = 0) => {
  document.querySelector(triggerSlide).style.transform = `translate3d(${widthItem - (document.body.clientWidth / 2 + indexItem)}, 0, 0)`;
};

const putActiveBtn = () => {
  let activeIndex = 0;
  const items = document.querySelectorAll('.indicators-main li')

  items.forEach((item, index) => {
    if (item.classList.contains('active')) {
      activeIndex = index;
    };
  });

  return activeIndex;
};

const getActiveSlide = () => {
  const allWidth = document.body.clientWidth;
  const activeBtn = putActiveBtn();
  let result = 0;

  result = (allWidth + 2) / 2;

  moveSlider(activeBtn, '.carousel-inner', result);
};

const putActiveSlide = (nextActive) => {
  const imageItems = document.querySelectorAll('.carousel-inner .carousel-item');

  imageItems.forEach((image) => {
    if (image.classList.contains('active')) {
      image.classList.remove('active')
    };
  });

  imageItems[nextActive].classList.add('active');

};


const getSlides = (e) => {
  if (e.target.tagName === 'BUTTON' || e.target.tagName === 'LI') {
    const prevActive = document.querySelector('.active');
    prevActive.classList.remove('active');
    e.target.closest('li').classList.add('active');
  };
  getActiveSlide();

  const activeItem = putActiveBtn();
  putActiveSlide(activeItem);
};


export { moveSlider, putActiveBtn, getActiveSlide, putActiveSlide, getSlides };