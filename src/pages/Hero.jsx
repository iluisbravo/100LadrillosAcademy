import React from 'react'

const Hero = () => {
  return (
    <div className="container">
      <div className="row align-items-center heroHeight">
        <div className="col">
          <h1>100 Ladrillos Academy</h1>
          <p>En un mundo donde las inversiones inmobiliarias son una opción cada vez más atractiva
            para los inversores, la necesidad de educación financiera específica y accesible es
            más crucial que nunca. Es en este contexto que nace el proyecto 100 Ladrillos Academy</p>
          <button className="btn btn-success" type="button">Empezar</button>
        </div>
        <div className="col text-center">
          <div>
            <img
              className='rounded object-fit-cover'
              width={450}
              height={450}
              src='https://images.unsplash.com/photo-1603201667141-5a2d4c673378?q=80&w=2696&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero