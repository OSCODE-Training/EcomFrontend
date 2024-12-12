import React from "react";
// import Navbar from "../components/Navbar"

import "./App.css"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddItemcart from "./Screen/AddItemcart";
import CheckoutItem from "./Screen/CheckoutItem";
import Menupagemain from "./Screen/Menupagemain";


function App() {
  

  return (
    
  <Router>
    <Routes> 
       <Route path="/menupage" element={<Menupagemain/>}/>
      <Route path="/addcart" element={<AddItemcart/>}/>
      <Route path="/checkout" element={<CheckoutItem/>}/>
    </Routes>
</Router>


      

    
  )
}

export default App
