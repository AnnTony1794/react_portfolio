import React from 'react'


const Card = (props) => (
    <div className="col s12 m3  ">
      <div className="card">
        <div className="card-image">
          <img src={props.data.image} />
          <span className="card-title">{ props.data.title }</span>
        </div>
        <div className="card-content">
          <p>{props.data.subtitle}</p>
        </div>
        <div className="card-action">
          <a href="#">Link</a>
        </div>
      </div>
    </div>
)

export default Card