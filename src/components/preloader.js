const getPreLoader = () => {
  const preloader = document.querySelector('#main-preloader');
  const header = document.querySelector('#header');
  const main = document.querySelector('#main');

  if (header.classList.contains('show') || main.classList.contains('show')) {
    preloader.classList.add('show');
    header.style.display = 'block';
    main.classList.remove('show');
  };
};

export default getPreLoader;

