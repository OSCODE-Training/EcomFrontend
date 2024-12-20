import React from "react";
import "./App.css"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddItemcart from "./Screen/AddItemcart";
import CheckoutItem from "./Screen/CheckoutItem";
import Menupagemain from "./Screen/Menupagemain";
import Landingpage from './Screen/Landingpage'
import Navbar from "./components/Navbar";

import Contactus from "./Screen/Contactus"
import Footer from './components/Footer';
import ScrollUpBtn from './components/ScrollUpBtn';
import Login from './Screen/Login';

const App=() => {
  return (
    
  <Router>
    <Navbar/>
    <ScrollUpBtn />
    <Routes> 
        <Route path="/login" element={<Login/>} />
        <Route path='/' element={<Landingpage />}/>
        {/* navbar routes */}
        <Route path="/education/interactive-flat-panel" element={<Menupagemain />} />
        <Route path="/education/led-video-wall" element={<Menupagemain />} />
        <Route path="/education/ptz-camera" element={<Menupagemain />} />
        <Route path="/education/digital-signages" element={<Menupagemain />} />
        <Route path="/education/digital-podium" element={<Menupagemain />} />
        <Route path="/business/interactive-flat-panel" element={<Menupagemain />} />
        <Route path="/business/wireless-presentation-device" element={<Menupagemain />} />
        <Route path="/business/led-video-wall" element={<Menupagemain />} />
        <Route path="/business/digital-signages" element={<Menupagemain />} />
        <Route path="/business/ptz-camera" element={<Menupagemain />} />
        <Route path="/business/video-conferencing-system" element={<Menupagemain />} />
        <Route path="/business/audio-conferencing-system" element={<Menupagemain />} />
        <Route path="/business/digital-podium" element={<Menupagemain />} />
        <Route path="/accessories/ops-pc-module" element={<Menupagemain />} />
        <Route path="/accessories/document-camera" element={<Menupagemain />} />
        <Route path="/accessories/stands-mounts" element={<Menupagemain />} />
        <Route path="/accessories/tripod" element={<Menupagemain />} />
        <Route path="/accessories/software" element={<Menupagemain />} />
        {/* individual product routes */}
        <Route path="/interactive-panels" element={<Menupagemain />} />
        <Route path="/video-walls" element={<Menupagemain />} />
        <Route path="/ptz-cameras" element={<Menupagemain />} />
        <Route path="/digital-podium" element={<Menupagemain />} />
        <Route path="/digital-signages" element={<Menupagemain />} />
        <Route path="/audio-conferencing" element={<Menupagemain />} />
        <Route path="/wireless-presentation" element={<Menupagemain />} />
        <Route path="/document-camera" element={<Menupagemain />} />
        
        <Route path="/addcart" element={<AddItemcart/>}/>
        <Route path="/checkout" element={<CheckoutItem/>}/>
        <Route path="/contactus" element={<Contactus />} />
    </Routes>
    <Footer/>
</Router>
    
  )
}

export default App
