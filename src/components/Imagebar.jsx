import React from 'react'
import "./Imagebar.css"

const Imagebar = ({showImage}) => {
  return (
     <div id="childcontent2">
    <div className='image1'>{showImage && <img src="./src/assets/smartpannel1.webp" alt="Image" />}</div>
</div>
  )
}

export default Imagebar