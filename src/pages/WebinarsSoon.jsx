import React, { useEffect, useState } from 'react'
import WebinarCard from '../components/WebinarCard';
import { getWebinars } from '../api/api';
import moment from 'moment';

const cursosData = [
  { 
    img: "https://source.unsplash.com/random/800x600/?invests",
    title: "Curso de Finanzas Personales",
    description: "Aprende a administrar tus finanzas personales y alcanza la libertad financiera.",
    autor: "Ana López",
    fecha: "10 Abr 2023"
  },
  { 
    img: "https://source.unsplash.com/random/800x600/?invest",
    title: "Inversiones y Mercados Financieros",
    description: "Descubre estrategias de inversión y aprende a operar en los mercados financieros.",
    autor: "Juan Pérez",
    fecha: "15 Jul 2023"
  },
  { 
    img: "https://source.unsplash.com/random/800x600/?money",
    title: "Economía y Desarrollo Sostenible",
    description: "Explora el impacto de la economía en el desarrollo sostenible del planeta.",
    autor: "María Gómez",
    fecha: "20 Sep 2023"
  },
  { 
    img: "https://source.unsplash.com/random/800x600/?economy",
    title: "Trading en el Mercado de Valores",
    description: "Aprende técnicas de trading y domina el mercado de valores.",
    autor: "Carlos Rodríguez",
    fecha: "5 Nov 2023"
  }
];

const WebinarsSoon = () => {
  const [webinarData, setWebinarData] = useState([]);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const instructors = await getWebinars();
        setWebinarData(instructors);
      } catch (error) {
        console.error('Error fetching instructors:', error);
      }
    };

    fetchInstructors();
  }, []);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col my-2 text-left">
          <h4>Próximos Webinars</h4>
        </div>
      </div>
      <div className="row g-4">
        {
          webinarData.map(item => {
            return (<WebinarCard
              key={item.broadcastDate}
              img={item.thumbnailUrl}
              title={item.title}
              description={item.description}
              fecha={moment(item.broadcastDate).format("DD/MM/YY")}
              category={item.category}
              autor={item.instructor.name + " " + item.instructor.lastName}
            />)
          })
        }
      </div>
    </div>
  )
}

export default WebinarsSoon
