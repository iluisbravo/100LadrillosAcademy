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
          <button className="btn btn-primary" type="button">Empezar</button>
        </div>
        <div className="col text-center">
          <img
            className='rounded object-fit-cover'
            width={450}
            height={450}
            src='https://i.pinimg.com/736x/76/59/69/765969e7103ee7985dd9440bb4754635.jpg' />
        </div>
      </div>
    </div>
  )
}

export default Hero