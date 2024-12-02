import React from 'react'
import "./Price.css"

const Price = () => {
  return (
    <>
      <div id='mainbuy'>
    <div className='limited'>Limited time offer</div>
    <div className='price'>
     -44% <img src="./src/assets/rupees1.svg" alt="" />45,111
    </div><br />
    MRP:<div className='MRP'> 50,000 </div><br />
    <div className='trust'>
     evota trust|/
    <div> inclusive of all taxes</div>
    <div> EMI starts with <img src="./src/assets/rupees1.svg" alt="" />1478 per month <button>EMI options ^ </button></div>
    </div> </div>
    </>
  )
}

export default Price