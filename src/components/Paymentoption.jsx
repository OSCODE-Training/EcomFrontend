import React, {useState} from 'react'
import "./Paymentoption.css"
const Paymentoption = () => {
const [isChecked, setisChecked] = useState(false)

    const handleCheckboxChange = (e) => {
      // setisChecked(e.target.Checked);
      // alert("This is workable");
      setisChecked(true);
    };
    const closePopup =() =>{
      setisChecked(false);
    }
    const Savepopup=()=>{
       setisChecked(false)}
  return (
    <>
    <div id="payment">
        <h2>Select Payment Option</h2>
         <div className="pay1">
          <div className='inp'> <div ><label><input type="checkbox" onClick={handleCheckboxChange} checked={isChecked} onChange={handleCheckboxChange}/>  Credit or Debit CARD </label>
          {isChecked && (
            <div style={popupStyles.overlay}>
              <div style={popupStyles.popup}>
                <h3>Enter card Details</h3>
                <input type="text" className='cardno' placeholder='Enter Card Number'/><input type="text" className='cardno1'  placeholder='Enter CVV' /><br />
               <input type="date" name="card expiry date" className="cardno1" /><input type="text" className='cardno' placeholder='Enter holder name' /><br />
                <button onClick={closePopup}>Cancel</button><button onClick={Savepopup}>SAVE card</button>
              </div>
            </div>
          )};
            </div> 
         
           <ul>
            <li><img src="./src/assets/Mastercardlogo.png" alt="" /></li>
            <li><img src="./src/assets/visalogo.webp" alt="" /></li>
            <li><img src="./src/assets/rupaylogo.webp" alt="" /></li>
            <li><img src="./src/assets/Maestrologo.png" alt="" /></li>
           </ul>
           </div><br />
          <div className='inp'> <input type="checkbox" />  Net Banking </div><br />
          <div className='inp'><input type="checkbox" name="" id="" /> UPI
                <ul>
                    <li><img src="./src/assets/G-paylogo.avif" alt="" /></li>
                    <li><img src="./src/assets/Phonepelogo.webp" alt="" /></li>
                    <li><img src="./src/assets/Paytm-Logo.svg" alt="" /></li>
                    {/* <li><img src="" alt="" /></li> */}
                </ul>
                </div><br />
             <div className='inp'><input type="checkbox" name="" id="" /> EMI options
             </div><br />
            <div className='inp'><input type="checkbox" name="" id="" /> Cash on Delivery
            </div><br /><br />
            <hr />
             <button>Use This Payment Method</button>
         </div>
    
    </div>
    
    </>
  )
}
const popupStyles = {
  overlay: {
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
  popup: {
    backgroundColor: "white",
    height: "200px",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    
  },
};




export default Paymentoption