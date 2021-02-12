import barbell from "../images/barbell.svg";

const SignIn = async () => {
  const view = `
  <div class="row">
    <div class="col-lg-6 col-md-7 mx-auto">
      <form class="form-signin" id="form-signin">
          <div class="text-center mb-4">
          <img width="36" height="36" src="${barbell}" alt="Logo" title="Logo" class="loaded">
            <h1 class="h3 mb-3 font-weight-normal">NIKE CLUB</h1>
            <h3 class="h4 mb-3 font-weight-normal">Вход</h1>
          </div>
          <div class="form-label-group">
              <input type="emai" id="userNickname" class="form-control" placeholder="Nickname" required="" autofocus="">
              <label for="userNickname">Nickname</label>
          </div>
          <div class="form-label-group">
              <input type="password" id="userPassword" class="form-control" placeholder="Password" required="" autocomplete="on">
              <label for="userPassword">Password</label>
          </div>
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"> Запомнить меня
            </label>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          <p class="mt-5 mb-3 text-muted text-center"><a href="#/signup/">Зарегистрируйтесь на Nike Club</a></p>
      </form>
    </div>
  </div>
  <a class="back_to_top" title="Наверх">↑</a>
  `;
  return view;
};

export default SignIn;