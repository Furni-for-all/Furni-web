import React, { useEffect, useState } from 'react';
import Sdata from "./Sdata";
import './App.css';
import Card from './Card';

const Home = () => {

    //const[counter,setCounter] = useState(0);
const[search, setSearch] = useState("");
const[query,setQuery] = useState("chicken");

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
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text"
        value = {search}
        onChange = {updateSearch}
        
        />
        <button 
        className = "search-button"
        type="submit"
        >
        Search
        </button>
      </form>
      
    </div>
     <div className="announcement-bar">
     <p>
     <img className= "flag" src="/images/indian_flag.png" alt="INDIA flag" >
      </img>
       We are based in INDIA 
       <img className= "flag" src="/images/indian_flag.png" alt="INDIA flag" >
      </img>
     </p>
   </div>

   <div >
     <h1 className = "text-center">Our Services</h1>
     </div>
    <div className="container-fluid mb-5">
       <div className = "row">
         <div className="col-10 mx-auto">
          <div className="row gy-4">
           {
             Sdata.map((val,ind) => {
               return <Card key={ind}
               imgsrc = {val.imgsrc}
               title= {val.title}/>
             })
           }
           

        

       
        </div>
        </div>
      </div>
    </div>
  </div>

 
);
};
export default Home;