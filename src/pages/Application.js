import barbell from "../images/barbell.svg";
import nikeApplication from "../images/nike-application.jpg";
import nikeQrCode from "../images/nike-qr-code.png";

const Application = () => {
  const view = `
    <div class="container marketing">

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#/">Главная</a></li>
          <li class="breadcrumb-item active" aria-current="page">Приложение</li>
        </ol>
      </nav>
      
      
      <hr class="featurette-divider">
      <div class="row main__block main__block_app">
        <div class="col">
          <h2 class="block__title">Присоединяйся к нашему сообществу домашних атлетов</h2>
          <a href="https://apps.apple.com/us/app/nike-training-club/id301521403" target="_blank" class="btn btn-primary btn-size btn-margin btn-border">Загрузить для iOS</a>
          <a href="https://play.google.com/store/apps/details?id=com.nike.ntc&hl=en_US" target="_blank" class="btn btn-primary btn-size btn-margin btn-border">Загрузить для Android</a>
          <a href="https://www.youtube.com/c/nike/playlists?view=50&shelf_id=5" target="_blank" class="btn btn-danger btn-size btn-margin btn-border">Youtube</a>
        </div>
      </div>
      <hr class="featurette-divider">
      <div class="row main__block">
        <div class="col">
          <h2 class="block__title">Тебя не остановить</h2>
          <p>Какой бы ни была твоя цель, мы поможем тебе ее достичь с приложением Nike Training Club. От ВИТ до йоги &mdash; у нас есть всё необходимое.</p>
        </div>
      </div>
      <hr class="featurette-divider">
      <div class="row row-cols-1 row-cols-md-2">
        <img src="${nikeApplication}" class="card-img-top card-border" 
        alt="Приложение Nike">
        <img src="${nikeQrCode}" class="card-img-top card-border" 
        alt="Приложение Nike">
      </div>
      <hr class="featurette-divider">
      <div class="row main__block">
        <div class="col">
          <h2 class="block__title">Присоединяйся к вызову &laquo;Тебя не остановить&raquo;</h2>
          <p>В тренинг-вызов входит 20 тренировок в течение 5 недель.
            Пять разных тренеров Nike сосредоточатся на 5 разных темах &mdash; от ВИИТ и танцев
            до йоги и тяжелой атлетики.
            Отсканируй QR-код выше с помощью камеры телефона, чтобы начать.</p>
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

export default Application;