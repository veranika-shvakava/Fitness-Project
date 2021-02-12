import slimness from "../images/slimness.jpg";
import barbell from "../images/barbell.svg";

const Slimless = () => {
  const view = `
        <div class="container marketing">

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#/">Главная</a></li>
                  <li class="breadcrumb-item"><a href="#/programs/">Программы</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Стройность</li>
              </ol>
            </nav>

            <hr class="featurette-divider">
            <div class="row row-cols-1 row-cols-md-2">
                <div class="card-body card-size">
                    <h5 class="card-title">Уровень подготовки</h5>
                    <p class="card-text">Все уровни</p>
                    <h5 class="card-title">Снаряжение</h5>
                    <p class="card-text">Необязательно</p>
                    <h5 class="card-title">Идеально для</h5>
                    <p class="card-text">Развития подготовки, обретения стройности и тонуса.</p>
                    <h5 class="card-title">Описание</h5>
                    <p class="card-text">Тренировки продолжительностью от 15 до 45 минут, 
                    направленные на развитие выносливости и дополненные упражнениями на развитие 
                    силы для поддержания баланса. Включены тренировки как низкой, так и высокой 
                    интенсивности.</p>
                    <a href="#/application/" class="btn btn-primary btn-size btn-margin">Упражнения</a>
                </div>
                <img src="${slimness}" class="card-img-top card-border" alt="Стройность">
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

export default Slimless;