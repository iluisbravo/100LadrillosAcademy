import React from 'react'
import Hero from './Hero'
import Brands from './Brands'
import CursosPopulares from './CursosPopulares'
import WebinarsSoon from './WebinarsSoon'
import Experts from './Experts'
import Comments from './Comments'
import Footer from '../components/Footer'
import SubFooter from '../components/SubFooter'

const Landing = () => {
  return (
    <>
      <div id="hero" className="container">
        <Hero />
      </div>
      <Brands />
      <div id="cursos" className="container">
        <CursosPopulares />
      </div>
      <div id="webinars" className="container">
        <WebinarsSoon />
      </div>
      <div id="expertos" className="container">
        <Experts />
      </div>
      <div id="comentarios" className="container">
        <Comments />
      </div>
      <div className="container-fluid border-top">
        <Footer />
      </div>
      <div className='container-fluid border-top'>
        <SubFooter />
      </div>
    </>
  )
}

export default Landing