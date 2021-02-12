import barbell from "../images/barbell.svg";

const Header = () => {
  const view = `
        <header id="head">
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-white">
                <div class="container d-flex flex-row flex-md-row justify-content-between" id="navbarCollapse">
                    <a class="py-2 product" href="#/" aria-label="Product">
                        <img width="36" height="36" src="${barbell}" alt="Logo" title="Logo" class="loaded">
                    </a>
                    <a class="py-2 d-none d-md-inline-block" href="#/">Nike Club</a>
                    <a class="py-2 d-none d-md-inline-block" href="#/programs/">Программы</a>
                    <a class="py-2 d-none d-md-inline-block" href="#/collections/">Подборки</a>
                    <a class="py-2 d-none d-md-inline-block" href="#/application/">Приложение</a>
                    <form class="form-inline mt-2 mt-md-0" id="form-search">
                      <input class="form-control" type="text" placeholder="Поиск..." aria-label="Search" id="searchBar" name="searchBar">
                      <i class="fa fa-search"></i>
                    </form>
                    <a class="py-2 d-none d-md-inline-block login" data-toggle="modal" data-target="#staticBackdrop" href="#/signin/">Вход</a>
                </div>
            </nav>
        </header>
        <ul id="cardsSearch" class="list-group list-group-horizontal show"></ul>
        `;
  return view;
};

export default Header;