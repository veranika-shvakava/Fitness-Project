import router from "../routes";
import getPreLoader from "../components/preloader";
import { moveSlider, putActiveBtn, getActiveSlide, putActiveSlide, getSlides } from "../components/slider";
import { writeAccountData, checkSignIn } from "../components/signin";
import { getScroll, backToTop } from "../components/scroll";
import { userSearch, loadCards, displayCards } from "../components/search";
import { getInfo, getCard, createCard } from "../components/randomUserImg";

const getContent = async () => {
  await router();
  window.scrollTo(0, 0);

  // Personal area
  if (localStorage.getItem('user-nickname') && localStorage.getItem('user-password')) {
    document.querySelector('.login').innerHTML += `<p>${localStorage.getItem('user-nickname')}</p>` + createCard();
    document.querySelector('.login').href = '#/personalarea/';
  }

  // Preloader
  const preloader = document.querySelector('#main-preloader');
  if (preloader) {
    setTimeout(getPreLoader, 2500);
  };

  // Scroll
  let goTopBtn = document.querySelector('.back_to_top');
  if (goTopBtn) {
    window.addEventListener('scroll', getScroll);
    goTopBtn.addEventListener('click', backToTop);
  };

  // Slider main page
  let btnMain = document.querySelector('.indicators-main');
  if (btnMain) {
    getActiveSlide();
    btnMain.addEventListener('click', getSlides);
  };

  // Slider collections page
  let btnCollections = document.querySelector('#collections-first');
  if (btnCollections) {
    getActiveSlideCollection();
    btnCollections.addEventListener('click', getSlidesCollection);
  };

  // Sign in and Sign up
  let signUpBtn = document.querySelector('#form-signup');
  if (signUpBtn) {
    signUpBtn.addEventListener('submit', writeAccountData);
  };
  let signInFrom = document.querySelector('#form-signin');
  if (signInFrom) {
    signInFrom.addEventListener('submit', checkSignIn);
  };

  // Logout
  let logout = document.querySelector('#logout');
  if (logout) {
    logout.addEventListener('click', () => {
      localStorage.clear();
    })
  }

  // Search
  const cardsSearch = document.getElementById('cardsSearch');
  const searchBar = document.getElementById('searchBar');
  let arrCards = [];

  searchBar.addEventListener('keyup', userSearch);
  loadCards();

};

export { getContent };