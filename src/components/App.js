import "../stylesheets/App.scss";
import logoHeader from "../images/thisismeLogo@2x.png";
import logoCard from "../images/logo-card.png";
import PhotoCard from "./PhotoCard.js";

function App() {
  /* MARTA */
  const AppHeader = (
    <header className="header">
      <div className="header__wrapper">
        <img
          className="header__wrapper--brandCard"
          title="logo"
          src={logoHeader}
          alt="Logo This is me"
        />
      </div>
    </header>
  );
  /* ESTO SE QUEDA */
  const AppMain = (
    <main className="mainProfile">
      <div className="mainProfile__wrapper">
        {/* CRISTINA */}
        <PhotoCard />
        {/* ESTO SE QUEDA */}
        <form className="form js-form" action="" method="POST">
          <div className="form__wrapper">
            {/* MERCHE */}
            <fieldset className="collapsable js-slide1">
              <legend className="collapsable__header js-design">
                <i
                  className="collapsable__header--icon fa fa-object-ungroup"
                  aria-hidden="true"
                ></i>
                <span className="collapsable__title">Diseña</span>
                <i
                  className="collapsable__header--arrow  collapsable__turn fa fa-angle-up"
                  aria-hidden="true"
                ></i>
              </legend>

              <div className="open collapsable__hide  design  js-content">
                <label htmlFOR="palette1" className="design__label">
                  <div className="colors">Colores</div>
                  <input
                    id="palette1"
                    type="radio"
                    value="1"
                    name="palette"
                    className="design__radio js-palette"
                    checked
                  />

                  <ul className="palette1">
                    <li className="design__color color1">Color A</li>
                    <li className="design__color color2">Color B</li>
                    <li className="design__color color3">Color C</li>
                  </ul>
                </label>

                <label htmlFOR="palette2" className="design__label">
                  <input
                    id="pallete2"
                    type="radio"
                    value="2"
                    name="palette"
                    className="design__radio js-palette"
                  />
                  <ul className="palette2">
                    <li className="design__color color1">Color A</li>
                    <li className="design__color color2">Color B</li>
                    <li className="design__color color3">Color C</li>
                  </ul>
                </label>

                <label htmlFOR="palette3" className="design__label">
                  <input
                    id="palette3"
                    type="radio"
                    value="3"
                    name="palette"
                    className="design__radio js-palette"
                  />
                  <ul className="palette3">
                    <li className="design__color color1">Color A</li>
                    <li className="design__color color2">Color B</li>
                    <li className="design__color color3">Color C</li>
                  </ul>
                </label>

                <label htmlFOR="palette4" className="design__label">
                  <input
                    id="palette4"
                    type="radio"
                    value="4"
                    name="palette"
                    className="design__radio js-palette"
                  />
                  <ul className="palette4">
                    <li className="design__color color1">Color A</li>
                    <li className="design__color color2">Color B</li>
                    <li className="design__color color3">Color C</li>
                  </ul>
                </label>
              </div>
            </fieldset>
            {/* NOBODY */}
            <fieldset className="collapsable js-slide2">
              <legend className="collapsable__header js-fill">
                <i
                  className="collapsable__header--icon fa fa-keyboard-o"
                  aria-hidden="true"
                ></i>
                <span className="collapsable__title">Rellena</span>
                <i
                  className="collapsable__header--arrow  collapsable__turn fa fa-angle-down"
                  aria-hidden="true"
                ></i>
              </legend>

              <div className="collapsable__hide fill js-content">
                <label htmlFOR="name" className="form__label">
                  Nombre completo
                </label>

                <input
                  name="full_name"
                  value=""
                  type="text"
                  id="name"
                  className="form__inputText js-name js-inputText js-inputName"
                  placeholder="Ej: Sally Jill"
                />

                <label htmlFOR="job" className="form__label">
                  Puesto
                </label>
                <input
                  name="job"
                  value=""
                  type="text"
                  id="job"
                  className="form__inputText js-position js-inputText js-inputJob"
                  placeholder="Ej: Front-end unicorn "
                />

                <label htmlFOR="photo" className="form__label">
                  Imagen de perfil
                </label>
                <div className="photo">
                  <button className="photo__btn js-profileTrigger">
                    Añadir imagen
                  </button>
                  <input className="hidden js-profileUploadBtn" type="file" />
                  <div className="photo__preview js-inputText js-profilePreview"></div>
                </div>

                <label htmlFOR="email" className="form__label">
                  Email
                </label>
                <input
                  name="email"
                  value=""
                  id="email"
                  type="email"
                  className="js-email form__inputText js-inputText js-inputEmail"
                  placeholder="Ej: sally-hill@gmail.com "
                />

                <label htmlFOR="phone" className="form__label">
                  Teléfono
                </label>
                <input
                  name="phone"
                  value=""
                  id="phone"
                  type="tel"
                  className="form__inputText js-phone js-inputText js-inputPhone"
                  placeholder="Ej: 555666888"
                />

                <label htmlFOR="linkedin" className="form__label">
                  Linkedin
                </label>
                <input
                  name="linkedin"
                  value=""
                  id="linkedin"
                  type="text"
                  className="js-linkedin form__inputText js-inputText js-inputLinkedin"
                  placeholder="Ej: linkekin.com/in/sally..sally-hill"
                />

                <label htmlFOR="github" className="form__label">
                  Github
                </label>
                <input
                  name="github"
                  value=""
                  id="github"
                  type="text"
                  className="form__inputText js-github js-inputText js-inputGithub"
                  placeholder="Ej: @sally-hill"
                />
              </div>
            </fieldset>
            {/* NATALIA */}
            <fieldset className="collapsable js-slide3">
              <legend className="collapsable__header js-share">
                <i
                  className="collapsable__header--icon fa fa-share-alt"
                  aria-hidden="true"
                ></i>
                <span className="collapsable__title">Comparte</span>
                <i
                  className="collapsable__header--arrow  collapsable__turn fa fa-angle-down"
                  aria-hidden="true"
                ></i>
              </legend>

              <div className="shareContainer js-content">
                <section className="share collapsable__hide">
                  <div className="share__btn js-create-btn">
                    <button className="share__btn--text">
                      <i
                        className="share__btn--icon fa fa-address-card-o"
                        aria-hidden="true"
                      ></i>
                      Crear tarjeta
                    </button>
                  </div>
                </section>
              </div>
            </fieldset>
            <section className="created js-created created--hidden">
              <h3 className="created__title">La tarjeta ha sido creada:</h3>
              <a className="created__url js-card-result" href=""></a>
              <button className="created__btnTwitter">
                <a
                  href="https://twitter.com/?lang=es"
                  target="_blank"
                  className="twitter"
                >
                  <i className="fa fa-twitter" aria-hidden="true"></i> Compartir
                  en twitter
                </a>
              </button>
            </section>
            <section className="js-error created__error created--hidden">
              <h4 className="created__error--title">
                Por favor complete los datos:
              </h4>
              <p className="js-consoleError"></p>
            </section>
            {/* ESTO SE QUEDA */}
          </div>
        </form>
      </div>
    </main>
  );
  /* MARTA */
  const AppFooter = (
    <footer className="footer">
      <div className="footer__wrapper">
        <small className="footer__wrapper--copy">This is me &copy; 2021</small>
        <img
          className="footer__wrapper--adalab"
          src="./assets/images/logo-adalab.png"
          alt="logo-adalab"
        />
      </div>
    </footer>
  );
  /* <script type="text/javascript" src="./assets/js/main.js"></script> */

  const AppReturn = (
    <div className="App">
      {AppHeader} {AppMain} {AppFooter}
    </div>
  );
  return AppReturn;
}

export default App;

/* function App() {
  <div className="App">
    <Header/>
    <Card-preview/>
    <Form>
      <Design/>
      <Fill/>
      <Share/>
    </Form>
    <Footer/>
  </div>
} */