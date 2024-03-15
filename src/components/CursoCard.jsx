import React from 'react'

const CursosCard = ({ img, title, description, fecha, autor }) => {
  return (
    <div className="col-3">
      <div className="card h-100 shadow">
        <img src={img} className="card-img-top" alt={title} />
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

export default CursosCard