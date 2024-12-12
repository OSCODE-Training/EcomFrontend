import React from 'react'
import "./CheckoutItem.css"
import Checkout from '../components/Checkout.jsx'
import Grandtotal from '../components/Grandtotal.jsx'
import Paymentoption from '../components/Paymentoption.jsx'

const CheckoutItem = () => {
  return (
    <>
    <div id="navbar">
       <ul>
        <li className='logoc'><img src="./src/assets/evota logo.jpg" alt="" /></li>
        <li className='check1'>CHECKOUT</li>
        <li><img src="./src/assets/securelogo.jpg" alt="" /></li>
       </ul>
    </div>
    <Checkout/>
    <Grandtotal/>
    <Paymentoption/>
    

    </>
  )
}

export default CheckoutItem