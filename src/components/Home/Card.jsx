import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Home.css'
import MoreDetails from '../MoreDetails/MoreDetails'

import { NavLink } from "react-router-dom";
const Card = (props) =>{

  return(
        <div className="col-md-4 col-10 mx-auto">
          <div className="card ">
            <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc}/>
            <div className="card-body">
              <h5 className="card-title font-weight-bold">{props.title}</h5>
              <p className="card-text">{props.body}</p>
                <NavLink to={{
                  pathname:'/moreDetails',
                  state: {title: props.title}  
                  }}
                  className="btn btn-primary">
                  Go to Details
                </NavLink>
            </div>
          </div>
        </div>
  );

};

export default Card;