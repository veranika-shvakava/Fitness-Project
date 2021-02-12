import err404 from "../images/404.png";
import barbell from "../images/barbell.svg";

const PersonalArea = () => {
  const view = `
  <div class="container marketing">

  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#/">Главная</a></li>
        <li class="breadcrumb-item active" aria-current="page">Профиль</li>
    </ol>
  </nav>

  <hr class="featurette-divider">
  <div class="row row-cols-1 row-cols-md-2 card-user">
      <img src="${err404}" class="card-img-center card-border-user" 
      alt="Хорошее начало">
      <div class="card-body card-size">
          <h5 class="card-title">Ваш nickname:</h5>
          <p class="card-text nickname"></p>
          <h5 class="card-title">Пол:</h5>
          <p class="card-text sex"></p>
          <h5 class="card-title">Возвраст:</h5>
          <p class="card-text age"></p>
          <h5 class="card-title">Уровень подготовки:</h5>
          <p class="card-text level"></p>
          <h5 class="card-title">Желаемый результат:</h5>
          <p class="card-text result"></p>
          <a href="#/application/" class="btn btn-primary btn-size btn-margin">Скачать наше приложение</a>
          <a href="#/" class="btn btn-dark btn-size btn-margin" id="logout">Выход</a>
      </div>
  </div>
  <hr class="featurette-divider">
  </div> 

  <footer class="container">
    <div class="row">
        <div class="col-12 col-md">
            <img width="36" height="36" src="${barbell}" alt="Logo" title="Logo" class="loaded">
            <small class="d-block mb-3 text-muted">&copy; 2020-2021</small>
        </div>
        <div class="col-6 col-md">
            <h5>Программы</h5>
            <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="#/programs/goodstart/">Хорошее начало</a></li>
                <li><a class="text-muted" href="#/programs/slimness/">Стройность</a></li>
                <li><a class="text-muted" href="#/programs/withoutequipment/">Без снаряжения</a></li>
                <li><a class="text-muted" href="#/programs/gymworkout/">Тренировка в зале</a></li>
            </ul>
        </div>
        <div class="col-6 col-md">
            <h5>Подборки</h5>
            <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="#/collections/">Лучший выбор</a></li>
                <li><a class="text-muted" href="#/collections/">Полезные советы</a></li>
                <li><a class="text-muted" href="#/collections/">Пробежки</a></li>
                <li><a class="text-muted" href="#/collections/">Группы мышц</a></li>
            </ul>
        </div>
        <div class="col-6 col-md">
            <h5>Приложение</h5>
            <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="#/application/">Тебя не остановить</a></li>
                <li><a class="text-muted" href="#/application/">iOS</a></li>
                <li><a class="text-muted" href="#/application/">Android</a></li>
            </ul>
        </div>
    </div>
  </footer>
  <a class="back_to_top" title="Наверх">↑</a>
  `;
  return view;
};

export default PersonalArea;