import React, {useState} from 'react'
import "./AddItemcart.css"
import Navbar from '../components/Navbar.jsx'

import Grandtotal1 from '../components/Grandtotal1.jsx'
import Cartcard from '../components/Cartcard.jsx'
import Footer from '../components/Footer.jsx'
const AddItemcart = () => {
      const [IsPopupcode, setIsPopupcode] = useState(false); 

      const opencode = (e) => {
        setIsPopupcode(true);
      };
      const checkcode = () => {
        setIsPopupcode(false);
      };
  
  return (
    <>
    <Navbar/>
    <div id="navbar2">
    <ul>
        <li className='logoc'><img src="./src/assets/evota logo.jpg" alt="" /></li>
        <li className='check1'>Cart ------ Address ------ Checkout</li>
        <li><img src="./src/assets/securelogo.jpg" alt="" /></li>
       </ul>
    </div><br />
    <Grandtotal1/>
    <div id="part1">
      <ul>
        <li>Check Availability at you city</li>
        <li><button onClick={opencode}>Enter Pincode</button></li>
        </ul>
        {IsPopupcode && (
          <div style={popupStyles.overlay2}>
          <div style={popupStyles.popup2}>
            <h2>Enter the City Pincode</h2><hr /><br />
            <input type="text" className='pincode1' placeholder='Enter your Pincode'/>
            <button onClick={checkcode} className='pincheck1'>check</button>
          </div>
          </div>
        )}
      
    </div>
    <div className="shopping">
    <Cartcard/>
    </div>
    <Footer/>
    </>
  );
};
const popupStyles = {
  overlay2: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  popup2: {
    backgroundColor: "white",
    width: "400px",
    height: "100px",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    zIndex:"10000",
  },
};

export default AddItemcart