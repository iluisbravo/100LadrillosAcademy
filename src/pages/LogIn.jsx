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
                src='https://img.freepik.com/foto-gratis/representacion-3d-casa-dibujos-animados_23-2150188323.jpg?t=st=1710471906~exp=1710475506~hmac=5002603793e6237eec45e9b271192425394c9141cccfedd4a7c1289e91cf20bb&w=1380' />
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