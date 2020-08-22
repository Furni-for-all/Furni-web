import React from "react";
import './Home.css'

import { NavLink } from "react-router-dom";
const Card = (props) =>{

  const onClickHandler = () => {
    console.log("clicked")
  }
  return(
        <div className="col-md-4 col-10 mx-auto">
          <div className="card ">
            <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc}/>
            <div className="card-body">
              <h5 className="card-title font-weight-bold">{props.title}</h5>
              <p className="card-text">{props.body}</p>
              <NavLink to="" className="btn btn-primary" onClick={onClickHandler}>More Details</NavLink>
            </div>
          </div>
        </div>
  );

};

export default Card;