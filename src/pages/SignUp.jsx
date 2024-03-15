import React from 'react'

const SignUp = () => {
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
                src='https://img.freepik.com/premium-photo/3d-render-beautiful-modern-house-plane-background_927984-1601.jpg?w=1380' />
            </div>
          </div>
          <div className="col">
            <h1>Sign Up</h1>
            <p>¡Únete hoy para desbloquear tu potencial financiero! Accede a cursos, webinars y una comunidad de inversores en crecimiento. </p>
            <form>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col'>
                    <div className="mb-3">
                      <input type="text" placeholder='Nombre' className="form-control" id="nameInput" aria-describedby="nameHelp" />
                    </div>
                  </div>
                  <div className='col'>
                    <div className="mb-3">
                      <input type="text" placeholder='Apellido' className="form-control" id="lastNameInput" aria-describedby="lastNameHelp" />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className="mb-3">
                      <input type="email" placeholder='Email' className="form-control" id="nameInput" aria-describedby="nameHelp" />
                    </div>
                  </div>
                  <div className='col'>
                    <div className="mb-3">
                      <input type="text" placeholder='Teléfono' className="form-control" id="lastNameInput" aria-describedby="lastNameHelp" />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className="mb-3">
                      <input type="text" placeholder='Genero' className="form-control" id="nameInput" aria-describedby="nameHelp" />
                    </div>
                  </div>
                  <div className='col'>
                    <div className="mb-3">
                      <input type="text" placeholder='Fecha de Nacimiento' className="form-control" id="lastNameInput" aria-describedby="lastNameHelp" />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className="mb-3">
                      <input type="password" placeholder='Contraseña' className="form-control" id="nameInput" aria-describedby="nameHelp" />
                    </div>
                  </div>
                  <div className='col'>
                    <div className="mb-3">
                      <input type="password" placeholder='Confirmar Contraseña' className="form-control" id="lastNameInput" aria-describedby="lastNameHelp" />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className="mb-3">
                      <button type="button" className="btn btn-primary">Registrar me</button>
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

export default SignUp