import React from 'react'
import "./Grandtotal1.css"
const Grandtotal1 = () => {
  return (
    <>
    <div id='order'>
       <div className='head2'><h4>Price Detail(1 item)</h4></div> 
       <div className="item1">
         <ul>
            <li>Total MRP</li>
            <li><img src="./src/assets/rupees1.svg" alt="" />12,600</li>
         </ul>
        </div> 
       <div className="item1">
         <ul>
            <li>Shipping Fee</li>
            <li><img src="./src/assets/rupees1.svg" alt="" />79</li>
         </ul>
        </div> <br /><hr />
        <div className="item1">
         <ul>
            <li><h3>Total Amount</h3></li>
            <li><img src="./src/assets/rupees1.svg" alt="" />12,600</li>
         </ul>
        </div> <br />

        <button>Buy Now</button>


   </div>
    </>
  )
}

export default Grandtotal1