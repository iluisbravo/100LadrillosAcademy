import React from 'react'

const LogIn = () => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center heroHeight">
          <div className="col text-center">
            <div>
              <img
                className='rounded object-fit-cover'
                width={450}
                height={450}
                src='https://images.unsplash.com/photo-1524292691042-82ed9c62673b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            </div>
          </div>
          <div className="col">
            <h1>Log In</h1>
            <p>¡Únete a la comunidad de inversores! Accede a recursos exclusivos y haz crecer tu conocimiento financiero con nosotros.</p>
            <form>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col'>
                    <div className="mb-3">
                      <input type="email" placeholder='Email' className="form-control" id="lastNameInput" aria-describedby="lastNameHelp" />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className="mb-3">
                      <input type="password" placeholder='Contraseña' className="form-control" id="nameInput" aria-describedby="nameHelp" />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className="mb-3">
                      <button type="button" className="btn btn-primary">Iniciar Sesión</button>
                    </div>
                  </div>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogIn