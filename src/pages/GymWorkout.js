import gymWorkout from "../images/gym-workout.jpg";
import barbell from "../images/barbell.svg";


const GymWorkout = () => {
  const view = `
        <div class="container marketing">

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#/">Главная</a></li>
                  <li class="breadcrumb-item"><a href="#/programs/">Программы</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Тренировка в зале</li>
              </ol>
            </nav>

            <hr class="featurette-divider">
            <div class="row row-cols-1 row-cols-md-2">
                <div class="card-body card-size">
                    <h5 class="card-title">Уровень подготовки</h5>
                    <p class="card-text">Средний и продвинутый</p>
                    <h5 class="card-title">Снаряжение</h5>
                    <p class="card-text">Необходимо для зала <br>(гантель, набивной мяч, прыжки со скакалкой, гиря, 
                        турник, гребной тренажер, ремни, подставка для плиометрических упражнений)</p>
                    <h5 class="card-title">Идеально для</h5>
                    <p class="card-text">Совмещения обычных тренировок в зале и тренировок на развитие силы.</p>
                    <h5 class="card-title">Описание</h5>
                    <p class="card-text">Приемущественно тренировки на все группы мышц, совмещающие развитие силы, плиометрику,
                    ускорение метаболизма и укрепление корпуса. в основном тренировки высокой интенсивности от 30 до 
                    45 минут.</p>
                    <a href="#/application/" class="btn btn-primary btn-size btn-margin">Упражнения</a>
                </div>
                <img src="${gymWorkout}" class="card-img-top card-border" alt="Стройность">
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

export default GymWorkout;