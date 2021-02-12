let arrCards = [];

const userSearch = (e) => {
  const searchString = e.target.value.toLowerCase();

  if (searchString.keyCode == 13) {
    searchString.preventDefault();
    return false;
  }

  const filteredCards = arrCards.filter((item) => {
    if (searchString === '') {
      cardsSearch.classList.add('show');
    } else {
      window.scrollTo(0, 0);
      cardsSearch.classList.remove('show');
      return item.title.toLowerCase().includes(searchString);
    }
  });
  displayCards(filteredCards);
};

const loadCards = async () => {
  try {
    const res = await fetch('http://localhost:3006/search');
    arrCards = await res.json();
    displayCards(arrCards);
  } catch (err) {
    console.error(err);
  }
};

const displayCards = (index) => {
  const htmlString = index
    .map((item) => {
      if (item.workouts ? item.workouts : '') {
        return `
        <li class="list-group-item">
          <h6>${item.title.toUpperCase()}</h6>
          <img src="${item.picture ? item.picture : ''}">
          <p>${item.workouts.toUpperCase()}</p>
          <a href="${item.link ? item.link : ''}" class="btn btn-primary">Подробнее</a>
        </li>
      `
      } else {
        return `
        <li class="list-group-item">
          <h6>${item.title.toUpperCase()}</h6>
          <img src="${item.picture ? item.picture : ''}">
          <a href="${item.link ? item.link : ''}" class="btn btn-primary">Подробнее</a>
        </li>
      `;
      }
    })
    .join('');
  cardsSearch.innerHTML = htmlString;
};

export { userSearch, loadCards, displayCards }