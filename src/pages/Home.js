import barbell from "../images/barbell.svg";
import nikeMainOne from "../images/nike-main-one.jpg";
import nikeMainTwo from "../images/nike-main-two.jpg";
import nikeMainThree from "../images/nike-main-three.jpg";
import nikeMainFour from "../images/nike-main-four.jpg";
import nikeMainFive from "../images/nike-main-five.jpg";
import nikeMainSix from "../images/nike-main-six.jpg";
import startOne from "../images/start-one.svg";
import waist from "../images/waist.svg";
import yogaPose from "../images/yoga-pose.svg";
import trainingHome from "../images/training-home.jpg";
import trainingPersonal from "../images/training-personal.jpg";
import trainingYoga from "../images/training-yoga.jpg";
import trainingProgramm from "../images/training-programm.jpg";
import "../styles/css/bootstrap.css";
import "../styles/css/style.css";






const Home = async () => {
  const view = `
  <div class="loader" id="main-preloader">
    <div class="l_main">
      <div class="l_square"><span></span><span></span><span></span></div>
      <div class="l_square"><span></span><span></span><span></span></div>
      <div class="l_square"><span></span><span></span><span></span></div>
      <div class="l_square"><span></span><span></span><span></span></div>
    </div>
  </div>

  <main role="main" id="main" class="show">

    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators indicators-main">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
        <li data-target="#myCarousel" data-slide-to="4"></li>
        <li data-target="#myCarousel" data-slide-to="5"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="${nikeMainOne}" alt="Nike Main One" class="image-size">
          <div class="container">
            <div class="carousel-caption text-left text-white">
              <h1>Нацелены на результат</h1>
              <p>Избавьтесь от килограммов уже сейчас</p>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-interval="5000">
          <img src="${nikeMainTwo}" alt="Nike Main Two" class="image-size">
          <div class="container">
            <div class="carousel-caption text-white">
              <h1>Занимайся в любом месте в любое время</h1>
              <p>Тренируйтесь не только в зале, но и дома</p>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-interval="5000">
          <img src="${nikeMainThree}" alt="Nike Main Three" class="image-size">
          <div class="container">
            <div class="carousel-caption text-right text-white">
              <h1>Простые правила тренировок с собственным весом</h1>
              <p>Правильно построенная тренировка поможет: сбросить лишний вес, укрепить мышцы, сжечь подкожные жировые
                отложения, избавиться от ненавистного целлюлита, улучшить координацию.</p>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-interval="5000">
          <img src="${nikeMainFour}" alt="Nike Main Four" class="image-size">
          <div class="container">
            <div class="carousel-caption text-left text-white">
              <h1>Тренировки на свежем воздухе</h1>
              <p>Занимайтесь во время отпуска, не прерывайте тренировки</p>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-interval="5000">
          <img src="${nikeMainFive}" alt="Nike Main Five" class="image-size">
          <div class="container">
            <div class="carousel-caption text-white">
              <h1>Не только форма, но и рельеф</h1>
              <p>Сделайте свое тело рельефным с нашими тренировками</p>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-interval="5000">
          <img src="${nikeMainSix}" alt="Nike Main Six" class="image-size">
          <div class="container">
            <div class="carousel-caption text-right text-white">
              <h1>Йога или пилатес: что подойдет тебе?</h1>
              <p>Оба вида фитнеса хороши по-своему и приносят пользу для всех, вне зависимости от первоначальной
                физической подготовки.</p>
            </div>
          </div>
        </div>
      </div>
      </a>
    </div>

    <div class="container marketing">

      <div class="row">
        <div class="col-lg-4">
          <img src="${startOne}" alt="Start" width="140" height="140">
          <h2>Хорошее начало</h2>
          <p>Начни свой путь к хорошей физической форме с программами сбалансированных тренировок с
            сопровождением.</p>
          <p><a class="btn btn-primary" href="#/programs/goodstart/" role="button">Подробнее &raquo;</a></p>
        </div>
        <div class="col-lg-4">
          <img src="${waist}" alt="Slim" width="140" height="140">
          <h2>Стройность</h2>
          <p>Стань стройнее с помощью сбалансированной 6-недельной программы для развития выносливости.</p>
          <p><a class="btn btn-primary" href="#/programs/slimness/" role="button">Подробнее &raquo;</a></p>
        </div>
        <div class="col-lg-4">
          <img src="${yogaPose}" alt="Without stress" width="140" height="140">
          <h2>Без напряжения</h2>
          <p>Стань сильнее и выносливее с этой четырехнедельной программой тренировок без утяжеления.</p>
          <p><a class="btn btn-primary" href="#/programs/withoutequipment/" role="button">Подробнее &raquo;</a></p>
        </div>
      </div>

      <hr class="featurette-divider">
      <div class="row featurette featurette__position">
        <div class="col-md-7">
          <h2 class="featurette-heading">Твое домашнее преимущество
            <span class="text-muted"></span>
          </h2>
          <p class="lead">Даже если мы вынуждены оставаться дома, мы можем провести это время с пользой. Мы можем
            тренироваться, становиться сильнее и лучше. Выполни тренировку NTC прямо у себя в гостиной. В течение
            следующих нескольких недель мы будем выкладывать тренировки, рекомендации по питанию и советы экспертов, и,
            когда всё вернется на свои места, мы станем еще сильнее, чем раньше. Присоединяйся к нашему сообществу
            домашних атлетов.</p>
        </div>
        <div class="col-md-5">
          <img src="${trainingHome}" alt="Домашние тренировки"
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
            height="500">
        </div>
      </div>
      <hr class="featurette-divider">
      <div class="row featurette featurette__position">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">Персональные программы тренировок специально для тебя
            <span class="text-muted"></span>
          </h2>
          <p class="lead">Начни персональную программу, которая учитывает твой прогресс, график и активность вне
            приложения. Приложение NTC дает доступ к четырем программам тренировок, рассчитанным на 4-6 недель. Неважно,
            тренируешься ли ты в зале или дома, &mdash; у нас найдется программа, которая подстроится под тебя и твое
            расписание, помогая тебе достигать целей.</p>
        </div>
        <div class="col-md-5 order-md-1">
          <img src="${trainingPersonal}" alt="Персональные тренировки"
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
            height="500">
        </div>
      </div>
      <hr class="featurette-divider">
      <div class="row featurette featurette__position">
        <div class="col-md-7">
          <h2 class="featurette-heading">Тренируйся как тебе удобно
            <span class="text-muted"></span>
          </h2>
          <p class="lead">Разнообразь свой режим с помощью нашей пополняющейся библиотеки тренировок, разработанных
            экспертами мирового класса &mdash; мастер-тренерами Nike. В бесплатном приложении NTC доступно более 190
            тренировок на развитие силы, выносливости и подвижности, а также занятия по йоге. Комплексы длительностью от
            15 до 45 минут помогут тебе проработать пресс, руки, плечи, ягодицы и ноги, а также почувствовать и увидеть
            результат.</p>
        </div>
        <div class="col-md-5">
          <img src="${trainingYoga}" alt="Йога тренировка"
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
            height="500">
        </div>
      </div>
      <hr class="featurette-divider">
      <div class="row featurette featurette__position">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">Подборки рекомендованных тренировок
            <span class="text-muted"></span>
          </h2>
          <p class="lead">Подборка тренировок включает упражнения и рекомендации от мастер-тренеров Nike для тебя.
            Подборка дает возможность узнавать о новых тренировках, пробовать популярные в сообществе упражнения и
            находить то, что подходит именно тебе. Вот несколько наших любимых.</p>
        </div>
        <div class="col-md-5 order-md-1">
          <img src="${trainingProgramm}" alt="Персональные тренировки"
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
            height="500">
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

export default Home;