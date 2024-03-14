import React from 'react'

const CommentCard = ({ img, name, occupation, date, comment }) => {
  return (
    <div className="col-4">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-5">
            <img height={'100%'} src={img} className="card-img object-fit-cover" alt="..." />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <h6 className="card-text badge text-bg-primary">{occupation}</h6>
              <p className="card-text">{comment}</p>
              <p className="card-text"><small className="text-body-secondary">{date}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentCard