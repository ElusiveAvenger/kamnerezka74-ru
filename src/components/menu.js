import React from "react";

import { Link } from "gatsby";
import { ScrollToUp } from "./scrollButton/scrollToUpButton";

const Menu = () => (
  <>
    <header className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <Link to="/" className="navbar-brand">
        kamnerezka74.ru
      </Link>
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
            <Link to="/" className="nav-link">
              Главная
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" data-target="#dropdownTarget" aria-haspopup="true" aria-expanded="false">
              Наши работы
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown" id="dropdownTarget">
              <Link className="dropdown-item" to="/gallery#turningProducts">Токарные изделия</Link>
              <Link className="dropdown-item" to="/gallery#crosses">Кресты</Link>
              <Link className="dropdown-item" to="/gallery#basReliefMonuments">Барельефные памятники</Link>
              <Link className="dropdown-item" to="/gallery#rocks">Скалы</Link>
              <Link className="dropdown-item" to="/gallery#granite">Элитные комплексы из гранита</Link>
              <Link className="dropdown-item" to="/gallery#monuments">Памятники</Link>
              <Link className="dropdown-item" to="/gallery#fences">Оградки</Link>
              <Link className="dropdown-item" to="/gallery#decor">Оформление памятников</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/materials/" className="nav-link">
              Материалы
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contacts/" className="nav-link">
              Контакты
            </Link>
          </li>
        </ul>
      </div>
    </header>
    <ScrollToUp />
  </>
);

export default Menu;
