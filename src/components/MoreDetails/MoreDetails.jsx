import React from 'react'
import {useLocation} from 'react-router-dom'
import bathroom from '../../images/bathroom.jpg'
import bedroom from '../../images/bedroom.jpg'
import bedtable from '../../images/bedtable.PNG'
import coccyxcushion from '../../images/coccyxcushion.PNG'
import dailyliving from '../../images/dailyliving.jpg'
import desktable from '../../images/desktable.PNG'
import gelcomfort from '../../images/gelcomfort.PNG'
import kitchen from '../../images/kitchen.jpg'
import leisure from '../../images/leisure.jpg'
import memorycushion from '../../images/memorycushion.PNG'
import mobility from '../../images/mobility.jpg'


export default function MoreDetails(props) {
    let location = useLocation();
      console.log(location.state.title)
      return (

        <h2>{location.state.title}</h2>
    )
}