import React from 'react'
import './MoreDetailCard.css'
import amazon from '../../images/amazon.PNG'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
function MoreDetailCard(props) {
    return (
        <div className="col-md-4 col-10 mx-auto">
          <div className="detail-card">
            <img src={props.imgsrc} className="detail-card-img-top" alt={props.imgsrc}/>
            <div className="detail-card-body">
              <h5 className="detail-card-title font-weight-bold">{props.title}</h5>
              <p className="detail-card-text">{props.body}</p>               
            </div>
            <a href="http://www.google.com"><DoubleArrowIcon className="amazon-icon"/></a>
          </div>
        </div>
    )
}

export default MoreDetailCard