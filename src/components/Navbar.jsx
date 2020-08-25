import React from "react";
import { NavLink } from "react-router-dom";
import './../App.css'

const Navbar = () =>{

return(
<div className="container-fluid nav_bg">
  <div className = "row nav_background">
    <div className="col-10 mx-auto">

 
<nav className="navbar navbar-expand-lg">
  <div className="navbar-brand" to="/"><p>F-U-R-N-I</p></div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink activeClassName = "menu_active"
        exact
        className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName = "menu_active"
        className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName = "menu_active"
         className="nav-link" to="/contact">Contact us</NavLink>
      </li>     
      
    </ul>
 
  </div>
</nav>
</div>
  </div>
</div>
);

};

export default Navbar;