import barbell from "../images/barbell.svg";

const SignUp = async () => {
  const view = `
  <div class="row">
    <div class="col-lg-6 col-md-7 mx-auto">
      <form class="form-signin" id="form-signup">
          <div class="text-center mb-4">
          <img width="36" height="36" src="${barbell}" alt="Logo" title="Logo" class="loaded">
            <h1 class="h3 mb-3 font-weight-normal">NIKE CLUB</h1>
            <h3 class="h4 mb-3 font-weight-normal">Регистрация</h1>
          </div>
          <div class="form-label-group">
              <input type="text" id="inputNickname" class="form-control" placeholder="Nickname" required="" autofocus="">
              <label for="inputNickname">Nickname</label>
          </div>
          <div class="form-label-group">
              <input type="text" id="inputSex" class="form-control" placeholder="Sex" required="" autofocus="">
              <label for="inputSex">Пол</label>
          </div>
          <div class="form-label-group">
              <input type="text" id="inputAge" class="form-control" placeholder="Age" required="" autofocus="">
              <label for="inputAge">Количество полных лет</label>
          </div>
          <div class="form-label-group">
              <input type="text" id="inputLevel" class="form-control" placeholder="Level" required="" autofocus="">
              <label for="inputLevel">Уровень подготовки</label>
          </div>
          <div class="form-label-group">
              <input type="text" id="inputResult" class="form-control" placeholder="Result" required="" autofocus="">
              <label for="inputResult">Желаемый результат</label>
          </div>
          <div class="form-label-group">
              <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" autocomplete="on">
              <label for="inputPassword">Password</label>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
      </form>
    </div>
  </div>
  <a class="back_to_top" title="Наверх">↑</a>
  `;
  return view;
};

export default SignUp;