const writeAccountData = () => {
  const userNickname = document.querySelector('#inputNickname');
  const userPassword = document.querySelector('#inputPassword');
  const userSex = document.querySelector('#inputSex');
  const userAge = document.querySelector('#inputAge');
  const userResult = document.querySelector('#inputResult');
  const userLevel = document.querySelector('#inputLevel');

  localStorage.setItem('user-nickname', userNickname.value.trim());
  localStorage.setItem('user-sex', userSex.value.trim());
  localStorage.setItem('user-age', userAge.value.trim());
  localStorage.setItem('user-level', userLevel.value.trim());
  localStorage.setItem('user-result', userResult.value.trim());
  localStorage.setItem('user-password', userPassword.value.trim());

  userNickname.value = '';
  userPassword.value = '';
  alert('Вы успешно зарегистрированы!');
  window.location.href = '#/';

};

const checkSignIn = () => {
  const nicknameStore = localStorage.getItem('user-nickname');
  const passwordStore = localStorage.getItem('user-password');

  const userNickname = document.querySelector('#userNickname');
  const userPassword = document.querySelector('#userPassword');

  if (nicknameStore === userNickname.value && passwordStore === userPassword.value) {
    alert('Привет, ' + nicknameStore + '!');
    userNickname.value = '';
    userPassword.value = '';
    window.location.href = '#/';
  } else {
    alert('Введите правильные Nickname и Password!');
    userNickname.focus();
    userPassword.value = '';
  };

};

export { writeAccountData, checkSignIn };