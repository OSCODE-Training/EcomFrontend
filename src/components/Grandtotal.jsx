import React from 'react'
import "./Grandtotal.css"
const Grandtotal = () => {
  return (
    <>
    <div id="grandtotal">
        <button>Use This Payment Method</button>
        <div className='para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis enim aliquam mollitia minima animi rerum.</div>
        <hr />
        <div className="summary">
        <div className='head1'>Order Summary</div>
          <div className='flex1'>
            <h4>Item:</h4>
            <h4><img src="" alt="" />9498.00</h4>
          </div>
          <div className="flex1">
            <h4>Delivery:</h4>
            <h4>---</h4>
          </div>
          <hr />
        </div>
        <div className='flex2'>
            <h2>Order Total:</h2>  
            <h3>---</h3>          
        </div>
        
    </div>

    </>
    
  )
}

export default Grandtotal