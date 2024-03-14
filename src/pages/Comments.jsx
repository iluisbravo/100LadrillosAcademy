import React from 'react'
import CommentCard from '../components/CommentCard';

const commentsData = [
  {
    comment: "Aprende a administrar tus finanzas personales y alcanza la libertad financiera.",
    date: "10 Abr 2023",
    img: `https://source.unsplash.com/random/800x600/?woman+smile`,
    name: "Ana López",
    occupation: "Inversionista"
  },
  {
    comment: "Me encantó el curso, aprendí mucho sobre inversiones en bolsa.",
    date: "15 Jul 2023",
    img: `https://source.unsplash.com/random/800x600/?man+smile`,
    name: "Juan Pérez",
    occupation: "Trader"
  },
  {
    comment: "El tema sobre economía fue muy interesante, ahora entiendo mejor cómo funciona el mercado.",
    date: "20 Sep 2023",
    img: `https://source.unsplash.com/random/800x600/?woman+happy`,
    name: "María Gómez",
    occupation: "Analista Financiera"
  },
  {
    comment: "Excelente curso, me ayudó a mejorar mis estrategias de trading.",
    date: "5 Nov 2023",
    img: `https://source.unsplash.com/random/800x600/??man+happy`,
    name: "Carlos Rodríguez",
    occupation: "Inversionista"
  },
  {
    comment: "Aprendí mucho sobre cómo construir riqueza y proteger mi patrimonio financiero.",
    date: "18 Feb 2024",
    img: `https://source.unsplash.com/random/800x600/??woman+face`,
    name: "Laura Martínez",
    occupation: "Inversionista"
  }
];


const Comments = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col my-2 text-left">
          <h4>Comentarios</h4>
        </div>
      </div>
      <div className="row g-4">
        {
          commentsData.map(item => {
            return (<CommentCard
              key={item.name}
              img={item.img}
              name={item.name}
              comment={item.comment}
              date={item.date}
              occupation={item.occupation}
            />)
          })
        }
      </div>
    </div>
  )
}

export default Comments
