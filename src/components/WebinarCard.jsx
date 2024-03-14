import React from 'react'

const WebinarCard = ({ img, title, description, fecha, autor }) => {
  return (
    <div className="col-3">
      <div className="card">
        <img height={350} src={img} className="card-img object-fit-cover mx-auto d-block" alt={title} />
        <div className="card-img-overlay">
          <h3 className="card-title text-center badge text-bg-primary">{title}</h3>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <small className="text-body-secondary float-start">{fecha}</small>
          <small className="text-body-secondary float-end">{autor}</small>
        </div>
      </div>
    </div>
  )
}

export default WebinarCard