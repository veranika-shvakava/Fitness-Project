import err404 from "../images/404.png";

const ErrorNotFound = () => {
  const view = `
    <div class="container">
        <h1 class="error error_title">Welcome to Erorr page!</h1>
        <img src="${err404}" alt="not found" class="error error_image">
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
    `;
  return view;
};

export default ErrorNotFound;