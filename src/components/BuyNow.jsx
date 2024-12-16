import React from 'react'
import "./BuyNow.css"
// import { useNavigate } from "react-router-dom";

import {useNavigate } from 'react-router-dom'


const BuyNow = () => {
  const navigate = useNavigate();

  const handleBuyNowClick = () => {
    navigate("/checkout");
  };
  const handleAddcartClick = () => {
    navigate("/addcart");
  };

  
  return (
    <>
    <div id="btn">
    <button onClick={handleBuyNowClick}>Buy Now</button>
    <button onClick={handleAddcartClick}>Add to Cart</button>
    </div>
    
   </>
    
   
  )
}

export default BuyNow