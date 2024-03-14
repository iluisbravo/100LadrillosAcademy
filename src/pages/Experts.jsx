import React from 'react'
import ExpertCard from '../components/ExpertCard';

const cursosData = [
  { 
    img: "https://source.unsplash.com/random/800x600/?woman+face+profile",
    title: "Contador",
    description: "Aprende a administrar tus finanzas personales y alcanza la libertad financiera.",
    autor: "Ana López",
    fecha: "10 Abr 2023"
  },
  { 
    img: "https://source.unsplash.com/random/800x600/?man+face+professional",
    title: "Ejecutivo Financiero",
    description: "Descubre estrategias de inversión y aprende a operar en los mercados financieros.",
    autor: "Juan Pérez",
    fecha: "15 Jul 2023"
  },
  { 
    img: "https://source.unsplash.com/random/800x600/?woman+face+smile",
    title: "Director de Finanzas",
    description: "Explora el impacto de la economía en el desarrollo sostenible del planeta.",
    autor: "María Gómez",
    fecha: "20 Sep 2023"
  },
  { 
    img: "https://source.unsplash.com/random/800x600/?man+face+happy",
    title: "Licenciado en Economía",
    description: "Aprende técnicas de trading y domina el mercado de valores.",
    autor: "Carlos Rodríguez",
    fecha: "5 Nov 2023"
  }
];

const Experts = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col my-2 text-left">
          <h4>Conoce a Nuestros Expertos</h4>
        </div>
      </div>
      <div className="row g-4">
        {
          cursosData.map(item => {
            return (<ExpertCard
              key={item.title}
              img={item.img}
              title={item.title}
              description={item.description}
              fecha={item.fecha}
              autor={item.autor}
            />)
          })
        }
      </div>
    </div>
  )
}

export default Experts
