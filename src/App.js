import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  } from "react-router-dom";
import Donate from './Donate'; 
import CreateForm from './CreateForm';
import Donordetail from './Donordetail';
import './App.css';
import Donor from './Donor';
import QRtest from './QRtest';
import QRgenerate from './QRgenerate';
import QRRead from './QRRead';
import PrintComponent from './QRRead';


function App() {
  return (
     <div>
    <Router>  
       <Switch> 
        {/* <Route path="/" exact><Donate/></Route>  
       <Route path="/createform"><CreateForm/></Route>
       <Route path="/donordetail/:id"/> 
        <Route path="/"><QRgenerate/></Route>
       <Route path="/qrprint"><QRRead/></Route> */}
        {/* <Route path="/"><QRtest></QRtest></Route>   */}
       <Route path="/qrprint"><PrintComponent/></Route> 
       <Route path="/"><QRgenerate/></Route>
       
      </Switch>
   </Router>   

   {/* <QRtest/>    */}

   {/* <QRgenerate/>  */}

</div>
     
              
    
            
  );
}

export default App;
