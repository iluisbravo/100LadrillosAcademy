/* eslint-disable react/prop-types */
import React from 'react'

import LogoIcon from '../assets/academy-100L-logo.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Navbar = ({ user, handleLogout }) => {
  function obtenerSaludo(nombre) {
    const horaActual = new Date().getHours();

    let saludo = '';
    let emoji = '';

    if (horaActual >= 5 && horaActual < 12) {
      saludo = '¡Buenos días';
      emoji = '☀️';
    } else if (horaActual >= 12 && horaActual < 19) {
      saludo = '¡Buenas tardes';
      emoji = '🌤️';
    } else {
      saludo = '¡Buenas noches';
      emoji = '🌙';
    }

    return `${saludo} ${nombre}! ${emoji}`;
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow p-3 mb-5 rounded">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img height={50} src={LogoIcon} alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#cursos">Cursos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#webinars">Webinars</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#expertos">Expertos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#comentarios">Comentarios</a>
              </li>
            </ul>
            <div className="d-flex">

              {user && (
                <>
                  <h6 className='align-self-center m-2'>{obtenerSaludo(user.name)}</h6>

                  <button onClick={handleLogout} className="btn btn-primary" type="button">
                    Log Out
                  </button>

                </>
              )}

              {!user && (
                <>
                  <Link to="/LogIn">
                    <button className="btn btn-outline-primary me-2" type="button">
                      Log In
                    </button>
                  </Link>
                  <Link to="/SignUp">
                    <button className="btn btn-primary" type="button">
                      Sign Up
                    </button>
                  </Link>
                </>
              )}



            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar