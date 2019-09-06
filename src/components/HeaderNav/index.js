import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import './index.css'

export default function(props) {
    return (
        <nav className="navbar navbar-header navbar-expand-lg navbar-dark" id="navbarHeader">
    <div className="navbar-menu">
      <img src={logo} alt="Doity" />
      {props.input ? (
        <div class="form-group col-md-7">
          <input
            type="text"
            class="form-control"
            id="tipoEvento"
            placeholder="Que tipo de evento você procura?"
          />
        </div>
      ) : null}
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" href="#">
              CONHEÇA A DOITY
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" href="#">
              BLOG
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/cadastro">
              <button id="btn-divulgar">DIVULGAR EVENTO</button>
            </Link>
          </li>
          <li class="nav-item">
            <button id="btn-login">LOGIN</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    );
}