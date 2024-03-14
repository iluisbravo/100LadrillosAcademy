import React from 'react'

const ExpertCard = ({ img, title, autor}) => {
  return (
    <div className="col-3">
      <div className="card text-white">
        <img  height={400}  src={img} className="card-img object-fit-cover" alt="..." />
          <div className="card-img-overlay text-center align-self-end">
            <h5 className="card-title">{autor}</h5>
            <p className="card-text badge text-bg-secondary">{title}</p>
          </div>
      </div>
    </div>
  )
}

export default ExpertCard