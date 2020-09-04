import React, { useEffect, useState } from 'react';
import Sdata from "./Sdata";
import './Home.css'
import Card from './Card';
import Footer from '../Footer/Footer'

const Home = () => {

    //const[counter,setCounter] = useState(0);
const[search, setSearch] = useState("");
const[query,setQuery] = useState("");

useEffect(() =>{
console.log('enter search');
}, [query]);

const updateSearch = e =>{
  setSearch(e.target.value);
  console.log(search);
};

const getSearch = e =>{
  e.preventDefault();
  setQuery(search);
  setSearch('')
}
return(
    <div>
    <div className="App">
      <div className="above-search d-lg-none">
          <div className="d-lg-none">
          <h1>Furni</h1>
          </div>
      </div>
      <form onSubmit={getSearch} className="search-form">
      <div className="d-none d-lg-block">
          <h1>Furni</h1>
      </div>
        <input className="search-bar" type="text"
        value = {search}
        onChange = {updateSearch}/>
        <button 
        className = "search-button"
        type="submit">
        Search
        </button>
      </form>
      
    </div>     
   <div >
     <h1 className = "text-center"></h1>
     </div>
    <div className="container-fluid mb-5">
       <div className = "row">
         <div className="col-10 mx-auto">
          <div className="row gy-4">
           {
             Sdata.map((val,ind) => {
               return <Card key={ind}
               imgsrc = {val.imgsrc}
               title= {val.title}
               body={val.body}/>
             })
           }       
        </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  );
};
export default Home;