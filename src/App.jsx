import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"

import Home from "./components/Home/Home.jsx"
import Contact from "./\components/Contact/Contact";
import About from "./components/About/About";
import MoreDetails from './components/MoreDetails/MoreDetails'
import Navbar from "./components/Navbar";
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';


const App = () => {

  return(
    <>
    <Navbar/>
    <Switch>
      <Route exact path ="/" component={Home} />
      <Route exact path ="/about" component={About} />
      <Route exact path ="/contact" component={Contact} />
      <Route exact path ="/moreDetails" component={MoreDetails} />
      <Redirect to = "/"/>
    
   </Switch>
   </>
  );

};
export default App;
