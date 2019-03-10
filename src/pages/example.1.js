import React from "react";

import defaultImage from "../images/gatsby-astronaut.png";
import logoImage from "../images/gatsby-icon.png";
import img1 from "../images/august33.jpg";
import img2 from "../images/flow-239.jpg";
import img3 from "../images/oboi-na-rabochiy-stol-osen-1.jpg";

import sun1 from "../images/sun1.jpg";
import sun2 from "../images/sun2.png";
import sun3 from "../images/sun3.png";

const ExamplePage = () => (
  <>
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">
          Название сайта
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Главная<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#marketing">
                Каталог
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacts">
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <main role="main">
      <div className="jumbotron jumbotron-fluid backimg">
        <div className="container">
          <h1 className="display-4">Какое-нибудь название</h1>
          <p className="lead">
            Какое-нибудь симпатичное описание для привлечения внимания и т.д.
          </p>
        </div>
      </div>

      <div className="container marketing" id="marketing">
        <div className="row">
          <div className="col-lg-4">
            <img
              className="rounded-circle"
              src={sun1}
              alt="Generic placeholder image"
              width="140"
              height="140"
            />
            <h2>Надёжность</h2>
            <p>
              свойство объекта сохранять во времени в установленных пределах
              значения всех параметров, характеризующих способность выполнять
              требуемые функции в заданных условиях применения, технического
              обслуживания, хранения и транспортирования.
            </p>
            <p>
              <a href="#" role="button">
                Подробнее &raquo;
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              className="rounded-circle"
              src={sun2}
              alt="Generic placeholder image"
              width="140"
              height="140"
            />
            <h2>Качество</h2>
            <p>
              совокупность свойств и характеристик продукции или услуги, которые
              придают им способность удовлетворять обусловленные или
              предполагаемые потребности потребителя
            </p>
            <p>
              <a className="btn btn-secondary" href="#" role="button">
                Подробнее &raquo;
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              className="rounded-circle"
              src={sun3}
              alt="Generic placeholder image"
              width="140"
              height="140"
            />
            <h2>Доступность</h2>
            <p>
              может рассматриваться как «возможность доступа» и получения пользы
              от какой-либо системы или сущности. Концепция сосредотачивает
              усилия на предоставлении доступа для людей с ограниченными
              возможностями или предоставлении доступа через использование
              вспомогательных технологий, однако исследования и разработки в
              сфере доступности приносят пользу для всех
            </p>
          </div>
        </div>

        <hr className="featurette-divider" id="features" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              First featurette heading.{" "}
              <span className="text-muted">It'll blow your mind.</span>
            </h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="featurette-image img-fluid mx-auto"
              src={img1}
              alt="Generic placeholder image"
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              Oh yeah, it's that good.{" "}
              <span className="text-muted">See for yourself.</span>
            </h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              className="featurette-image img-fluid mx-auto"
              src={img2}
              alt="Generic placeholder image"
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              And lastly, this one.{" "}
              <span className="text-muted">Checkmate.</span>
            </h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="featurette-image img-fluid mx-auto"
              src={img3}
              alt="Generic placeholder image"
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <div className="card">
              <img
                className="card-img-top"
                src={defaultImage}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Название №1</h5>
                <p className="card-text">Описание №1</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  data-whatever="@mdo"
                >
                  Посмотреть
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="card">
              <img
                className="card-img-top"
                src={defaultImage}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Название №2</h5>
                <p className="card-text">Описание которое чуть побольше</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  data-whatever="@mdo"
                >
                  Посмотреть
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="featurette-divider" />
      </div>

      <footer className="container" id="contacts">
        <div className="card">
          <div className="card-header">Контакты</div>
          <div className="card-body">
            <p className="card-text">
              С нами можно связаться следующими способами
            </p>
            <form>
              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label"
                >
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    readOnly
                    className="form-control-plaintext"
                    id="staticEmail"
                    value="email@example.com"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="staticPhone"
                  className="col-sm-2 col-form-label"
                >
                  Телефон
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    readOnly
                    className="form-control-plaintext"
                    id="staticPhone"
                    value="+7 (123) 456-78-90"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="card-footer text-muted">
            <p className="float-right">
              <a href="#">На верх</a>
            </p>
            <p>{new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </main>

    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Описание
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body" />
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ExamplePage;
