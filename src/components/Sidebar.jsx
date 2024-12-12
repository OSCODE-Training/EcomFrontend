import React,{useState} from 'react'
import "./Sidebar.css"



const Sidebar = ({ moveImage, showImage }) => {
  
      
  return (
    <>
    
    <div id="childcontent1">
    <ul onClick={moveImage}>
        
        <li>{showImage && <img src="./src/assets/smartpannel1.webp" alt="Image" />}</li>
        <li> <img src="./src/assets/smartpannel2.webp" alt="Image" /></li>
        <li> <img src="./src/assets/smartpannel3.webp" alt="Image" /></li>
        <li> <img src="./src/assets/smartpannel4.webp" alt="Image" /></li>
        <li> <img src="./src/assets/smartpannel5.webp" alt="Image" /></li>
    </ul>
</div>
</>
  )
  
}

export default Sidebar