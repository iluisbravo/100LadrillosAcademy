import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Brands from './pages/Brands'
import Comments from './pages/Comments'
import CursosPopulares from './pages/CursosPopulares'
import Experts from './pages/Experts'
import Hero from './pages/Hero'
import WebinarsSoon from './pages/WebinarsSoon'

function App() {

  return (
    <>
      <Navbar />
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
        <div className="d-flex flex-column flex-sm-row justify-content-between p-5">
          <p>Code with <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
          </svg> in 100 Ladrillos Sonata, Guadalajara.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink: href="#twitter"></use></svg></a></li>
            <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink: href="#instagram"></use></svg></a></li>
            <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink: href="#facebook"></use></svg></a></li>
          </ul>
        </div>
      </div>

    </>
  )
}

export default App
