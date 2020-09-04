import React from 'react'
import './MoreDetailCard.css'
import amazon from '../../images/amazon.PNG'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
function MoreDetailCard(props) {
    return (
        <div className="col-md-4 col-10 mx-auto">
          <div className="card ">
            <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc}/>
            <div className="card-body">
              <h5 className="card-title font-weight-bold">{props.title}</h5>
              <p className="card-text">{props.body}</p>               
            </div>
            <a href="http://www.google.com"><DoubleArrowIcon className="amazon-icon"/></a>
          </div>
        </div>
    )
}

export default MoreDetailCard