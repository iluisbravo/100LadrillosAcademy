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
      <div className="container">
        <Hero />
      </div>
      <Brands />
      <div className="container">
        <CursosPopulares />
      </div>
      <div className="container">
        <WebinarsSoon />
      </div>
      <div className="container">
        <Experts />
      </div>
      <div className="container">
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