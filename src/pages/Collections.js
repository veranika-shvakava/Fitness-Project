import barbell from "../images/barbell.svg";
import yogaEveryDays from "../images/yoga-every-days.jpg";
import cheerfulness from "../images/cheerfulness.jpg";
import forTheWholFamily from "../images/for-the-whole-family.jpg";
import bigTraining from "../images/big-training.jpg";
import sync from "../images/sync.jpg";
import crossTraining from "../images/cross-training.jpg";
import relaxation from "../images/relaxation.jpg";
import twentyMinutes from "../images/20-minutes.jpg";
import yogaTraining from "../images/yoga-training.jpg";
import maxTraining from "../images/max-training1.jpg";
import dynamicTraining from "../images/dynamic-training.jpg";
import afterCardio from "../images/after-cardio.jpg";
import run from "../images/run.jpg";
import goodRun from "../images/good-run.jpg";
import abdominalAbs from "../images/abdominal-abs.jpg";
import strongPress from "../images/strong-press.jpg";
import powerAndTonus from "../images/power-and-tonus.jpg";
import saveActivity from "../images/save-activity.jpg";

const Programs = () => {
  const view = `
    <div class="container marketing">

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#/">Главная</a></li>
          <li class="breadcrumb-item active" aria-current="page">Подборки</li>
        </ol>
      </nav>
      
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-4">
          <div class="card h-100">
            <img src="${yogaEveryDays}" class="card-img-top card-size" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title text-white">Йога на каждый день</h5>
              <p class="card-text text-white">6 тренировок &bull; Все уровни</p>
              <a href="#/application/" class="btn btn-primary btn-size">Подробнее</a>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100">
            <img src="${cheerfulness}" class="card-img-top card-size" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title text-white">Заряд позитива</h5>
              <p class="card-text text-white">12 тренировок &bull; Все уровни</p>
              <a href="#/application/" class="btn btn-primary btn-size">Подробнее</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-4">
          <div class="card h-103">
            <img src="${forTheWholFamily}" class="card-img-top card-size" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title text-white">Для всей семьи</h5>
              <p class="card-text text-white">16 тренировок &bull; Все уровни</p>
              <a href="#/application/" class="btn btn-primary btn-size">Подробнее</a>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-103">
            <img src="${bigTraining}" class="card-img-top card-size" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title text-white">Большие тренировки дл небольших пространств
              </h5>
              <p class="card-text text-white">12 тренировок &bull; Все уровни</p>
              <a href="#/application/" class="btn btn-primary btn-size">Подробнее</a>
            </div>
          </div>
        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row main__block">
        <div class="col">
          <h2 class="block__title">Полезные советы</h2>
        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-4">
          <div class="card h-100">
            <img src="${sync}" class="card-img-top card-size" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title text-white">Синхронизируй тренировки с циклом</h5>
              <p class="card-text text-white">12 тренировок &bull; Все уровни</p>
              <a href="#/application/" class="btn btn-primary btn-size">Подробнее</a>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100">
            <img src="${crossTraining}" class="card-img-top card-size" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title text-white">Кросс-тренинг для совершенствования навыков
              </h5>
              <p class="card-text text-white">10 тренировок &bull; Начальный и средний уровни
              </p>
              <a href="#/application/" class="btn btn-primary btn-size">Подробнее</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-4">
          <div class="card h-100">
            <img src="${relaxation}" class="card-img-top card-size" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title text-white">Отдых от офисной работы</h5>
              <p class="card-text text-white">4 тренировки &bull; Начальный уровень</p>
              <a href="#/application/" class="btn btn-primary btn-size">Подробнее</a>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100">
            <img src="${twentyMinutes}" class="card-img-top card-size" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title text-white">Успеть за 20 минут</h5>
              <p class="card-text text-white">10 тренировок &bull; Начальный и средний уровни
              </p>
              <a href="#/application/" class="btn btn-primary btn-size">Подробнее</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-4">
          <div class="card h-90">
            <img src="${yogaTraining}" class="card-img-top card-size" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title text-white">Йога, чтобы прокачать тренировки</h5>
              <p class="card-text text-white">6 тренировок &bull; Все уровни</p>
              <a href="#/application/" class="btn btn-primary btn-size">Подробнее</a>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-90">
            <img src="${maxTraining}" class="card-img-top card-size" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title text-white">Получи максимум от тренировки</h5>
              <p class="card-text text-white">10 тренировок &bull; Средний и продвинутый
                уровни</p>
              <a href="#/application/" class="btn btn-primary btn-size">Подробнее</a>
            </div>
          </div>
        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row main__block">
        <div class="col">
          <h2 class="block__title">Выводи пробежки на новый уровень</h2>
        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-4">
          <div class="card h-90">
            <img src="${dynamicTraining}" class="card-img-top card-size" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title text-white">Динамическая разминка для атлетов</h5>
              <p class="card-text text-white">4 тренировки &bull; Начальный и средний уровни
              </p>
              <a href="#/application/" class="btn btn-primary btn-size">Подробнее</a>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-90">
            <img src="${afterCardio}" class="card-img-top card-size" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title text-white">Занятия после кардиотренировок</h5>
              <p class="card-text text-white">6 тренировок &bull; Начальный и средний уровни
              </p>
              <a href="#/application/" class="btn btn-primary btn-size">Подробнее</a>
            </div>
          </div>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-4">
          <div class="card h-110">
            <img src="${run}" class="card-img-top card-size" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title text-white">Мощный кор для мощных пробежек</h5>
              <p class="card-text text-white">8 тренировок &bull; Начальный и средний уровни
              </p>
              <a href="#/application/" class="btn btn-primary btn-size">Подробнее</a>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-110">
            <img src="${goodRun}" class="card-img-top card-size" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title text-white">Простые привычки для отличных пробежек</h5>
              <p class="card-text text-white">6 тренировок &bull; Все уровни</p>
              <a href="#/application/" class="btn btn-primary btn-size">Подробнее</a>
            </div>
          </div>
        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row main__block">
        <div class="col">
          <h2 class="block__title">Прорабатывай группы мышц</h2>
        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-4">
          <div class="card h-100">
            <img src="${abdominalAbs}" class="card-img-top card-size" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title text-white">Лучше для пресса, рук и ягодиц</h5>
              <p class="card-text text-white">12 тренировок &bull; Все уровни</p>
              <a href="#/application/" class="btn btn-primary btn-size">Подробнее</a>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100">
            <img src="${strongPress}" class="card-img-top card-size" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title text-white">Сильный и рельефный пресс</h5>
              <p class="card-text text-white">8 тренировок &bull; Все уровни</p>
              <a href="#/application/" class="btn btn-primary btn-size">Подробнее</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-4">
          <div class="card h-102">
            <img src="${powerAndTonus}" class="card-img-top card-size" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title text-white">Развивай силу и будь в тонусе</h5>
              <p class="card-text text-white">6 тренировок &bull; Все уровни</p>
              <a href="#/application/" class="btn btn-primary btn-size">Подробнее</a>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-102">
            <img src="${saveActivity}" class="card-img-top card-size" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title text-white">Сохраняй активность в выходные</h5>
              <p class="card-text text-white">8 тренировок &bull; Все уровни</p>
              <a href="#/application/" class="btn btn-primary btn-size">Подробнее</a>
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