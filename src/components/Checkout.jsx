import React,{ useState } from 'react'
import "./Checkout.css" 
const Checkout = () => {
    const [isPopupdelivery, setIsPopupdelivery] = useState(false);

    const [info, setInfo] = useState("Harsh Kumar"); 
    const [tempInfo, setTempInfo] = useState(info); 
  
    const [info1, setInfo1] = useState("31 A street"); 
    const [tempInfo1, setTempInfo1] = useState(info1); 
  
    const [info2, setInfo2] = useState("laal baag Banglore"); 
    const [tempInfo2, setTempInfo2] = useState(info2); 
  
    const [info3, setInfo3] = useState("342877"); 
    const [tempInfo3, setTempInfo3] = useState(info3); 

    const [info4, setInfo4] = useState("4345678879"); 
    const [tempInfo4, setTempInfo4] = useState(info4); 
  
    
    const handleEditClick = (e) => {
      setTempInfo(info); 
      setTempInfo1(info1); 
      setTempInfo2(info2); 
      setTempInfo3(info3); 
      setTempInfo4(info4); 
      setIsPopupdelivery(true);
    };

    const handleEditDoneClick = () => {
      setInfo(tempInfo); 
      setInfo1(tempInfo1); 
      setInfo2(tempInfo2); 
      setInfo3(tempInfo3); 
      setInfo4(tempInfo4); 
      setIsPopupdelivery(false); 
    };

    const handleCloseClick=() =>{
      setIsPopupdelivery(false); 
    }
  
    

  return (
   <>
    <div id="delivery">
    <div className='del'>
       <ul >
        <li>Delivery Address:</li>
       </ul></div>
       <div className='address'>
        <ul>
        <li>{info}</li>
        <li>{info1}</li>
        <li> {info2}</li>
        <li>{info3}</li>
        <li>{info4}</li>
        </ul>
       </div>
       <div className='Edit'>
        <ul>
        <div> <li><button onClick={handleEditClick} >Edit</button></li>
        {isPopupdelivery && (
          <div style={popupStyles.overlay1}>
              <div style={popupStyles.popup1}>
            <h3>Edit info</h3><hr /><br />

            <input type="text" className='dell1' value={tempInfo}
            onChange={(e) => setTempInfo(e.target.value)} placeholder=' First Name'/> 
        
             <input type="text" className='dell1' value={tempInfo4}
            onChange={(e) => setTempInfo4(e.target.value)} placeholder='Enter Mobile no' /><br /><br />
             <h4>Address <hr /></h4><br />
             <input type="text" className='dell1' value={tempInfo3}
            onChange={(e) => setTempInfo3(e.target.value)} placeholder='Enter Pincode' /><br />
             <input type="text" value={tempInfo1}
            onChange={(e) => setTempInfo1(e.target.value)} className='dell1' placeholder='Enter Address (House No,Building,Street Area)*' /><br />
             <input type="text" className='dell1' value={tempInfo2}
            onChange={(e) => setTempInfo2(e.target.value)} placeholder='Enter Locality\ Town*' /><br /><br />
             
            <button className='Edit1' onClick={handleEditDoneClick}>Edit Done</button><button className='Edit1' onClick={handleCloseClick}>Close</button>
          </div>
          </div>
        )}
          </div>
       {/* <li><button>Add Instruction</button></li> */}
       </ul>
       </div>
        

        
    </div>
    
    
  </>
  );
  };
  const popupStyles = {
    overlay1: {
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
    popup1: {
      backgroundColor: "white",
      width: "390px",
      height: "500px",
      marginLeft : "-200px",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
      zIndex:"10000",
    },
  };
  

    
       
       
    

       
   
  


export default Checkout