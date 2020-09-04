import React from 'react'
import {useLocation} from 'react-router-dom'
import MoreDetailCard from '../MoreDetailCard/MoreDetailCard'
import MoreDetailData from './MoreDetailData.jsx'


export default function MoreDetails(props) {
    let location = useLocation();
      console.log(location.state.title)
      return (
          <div>      
            <div className="container-fluid mb-5">
              <div className = "row">
                <h1>hello there</h1>
                <div className="col-10 mx-auto">
                  <div className="row gy-4">
                  {
                    MoreDetailData.map((val,ind) => {
                    return <MoreDetailCard
                      imgsrc={val.imgsrc}
                      title={val.title}
                      body={val.body}/>
                    })
                  }       
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}