import React from 'react'

const WebinarCard = ({ img, title, description, fecha, autor, category }) => {
  return (
    <div className="col-4">
      <div className="card shadow">
        <img height={350} src={img} className="card-img img-fluid" alt={title} />
        <div className="card-img-overlay">
          <h3 className="card-title text-center badge text-bg-primary">{category}</h3>
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