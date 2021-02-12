import barbell from "../images/barbell.svg";
import goodStart from "../images/good-start.jpg";
import slimness from "../images/slimness.jpg";
import withoutEquipment from "../images/without-equipment.jpg";
import gymWorkout from "../images/gym-workout.jpg";

const Programs = () => {
  const view = `
    <div class="container marketing">

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#/">Главная</a></li>
          <li class="breadcrumb-item active" aria-current="page">Программы</li>
        </ol>
      </nav>

      <hr class="featurette-divider">
      <div class="row main__block">
        <div class="col">
          <h2 class="block__title">Выбери программу</h2>
          <p>Начни персональную программу, которая учитывает твой прогресс, расписание и активность.</p>
        </div>
      </div>
      <hr class="featurette-divider">
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-4">
          <div class="card h-100">
            <img src="${goodStart}" class="card-img-top" alt="Хорошее начало">
            <div class="card-body">
              <h5 class="card-title">Хорошее начало</h5>
              <p class="card-text">Начни свой путь к хорошей и крепкой физической форме с четырехнедельной программой
                сбалансированных тренировок.</p>
              <a href="#/programs/goodstart/" class="btn btn-primary btn-size btn-margin">Подробнее</a>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100">
            <img src="${slimness}" class="card-img-top" alt="Стройность">
            <div class="card-body">
              <h5 class="card-title">Стройность</h5>
              <p class="card-text">Стань стройнее с помощью сбалансированного шестинедельного плана, направленного на
                повышение выносливости.</p>
              <a href="#/programs/slimness/" class="btn btn-primary btn-size">Подробнее</a>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100">
            <img src="${withoutEquipment}" class="card-img-top" alt="Без снаряжения">
            <div class="card-body">
              <h5 class="card-title">Без снаряжения</h5>
              <p class="card-text">Стань сильнее и выносливее с этой четырехнедельной программой без утяжеления.</p>
              <a href="#/programs/withoutequipment/" class="btn btn-primary btn-size">Подробнее</a>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100">
            <img src="${gymWorkout}" class="card-img-top" alt="Тренировка в зале">
            <div class="card-body">
              <h5 class="card-title">Тренировка в зале</h5>
              <p class="card-text">Восьминедельный план для укрепления всех групп мышц с помощью тренировок с
                отягощением.</p>
              <a href="#/programs/gymworkout/" class="btn btn-primary btn-size">Подробнее</a>
            </div>
          </div>
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

export default Programs;