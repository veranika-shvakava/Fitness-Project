const getInfo = async (url) => {
  const res = await fetch(url);
  return res.json();
}

const getCard = async () => {
  const data = await getInfo('https://randomuser.me/api');
  return data.results[0];
}

const createCard = async () => {
  const dataItems = await getCard();

  let content = document.querySelector('.login');
  content.innerHTML = `
    ${localStorage.getItem('user-nickname')}
    <img src="${dataItems.picture.thumbnail}" />
  `;
  let cardUserImage = document.querySelector('.card-user .card-img-center');
  if (cardUserImage) {
    cardUserImage.parentElement.removeChild(cardUserImage);
  }

  let bodyUser = document.querySelector('.card-user');
  let imgUser = document.createElement('img');
  imgUser.src = `${dataItems.picture.large}?`+Math.random();
  imgUser.classList.add('card-img-center');
  imgUser.classList.add('card-border-user');
  if (bodyUser) {
    bodyUser.appendChild(imgUser);
  }

  let cardNickname = document.querySelector('.nickname');
  if (cardNickname) {
    cardNickname.innerText = `${localStorage.getItem('user-nickname')}`;
  }
  let cardSex = document.querySelector('.sex');
  if (cardSex) {
    cardSex.innerText = `${localStorage.getItem('user-sex')}`;
  }
  let cardAge = document.querySelector('.age');
  if (cardAge) {
    cardAge.innerText = `${localStorage.getItem('user-age')}`;
  }
  let cardLevel = document.querySelector('.level');
  if (cardLevel) {
    cardLevel.innerText = `${localStorage.getItem('user-level')}`;
  }
  let cardResult = document.querySelector('.result');
  if (cardResult) {
    cardResult.innerText = `${localStorage.getItem('user-result')}`;
  }

}

export { getInfo, getCard, createCard };