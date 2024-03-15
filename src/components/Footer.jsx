const Footer = () => {
  return (
    <footer className="p-5">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5>Academy</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <i className="bi bi-mortarboard-fill"/> Cursos
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <i className="bi bi-people-fill"/> Comunidades
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <i className="bi bi-webcam-fill"/> Webinars
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
              <i className="bi bi-box2-heart-fill"/> Recursos
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <i className="bi bi-patch-question-fill"/> FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <i className="bi bi-info-circle-fill"/> Acerca De
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>Comunidad</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Principales Foros de Ayuda</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Foros Populares</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Recien Iniciados</a></li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>Otros</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Términos y Condiciones</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Aviso de privacidad</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contacto</a></li>
          </ul>
        </div>

        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribete a nuestro newsletter</h5>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label className="visually-hidden">Dirección de Correo</label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Dirección de Correo" />
              <button className="btn btn-primary" type="button">Subscribirse</button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer