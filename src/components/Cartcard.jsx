import React, {useState} from 'react'
import "./Cartcard.css"

const Cartcard = () => {
    const [count, setCount] = useState(1);
    const [invisible, setinvisible] = useState(true);
    
  return (
    <>
    {invisible &&(
      <div id="card">
      <div className="image4"><img src="./src/assets/smartpannel3.webp" alt="" /></div>
      <div className="info2">
          <ul>
            <li><h4 className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam illo iste ab repudiandae facere veniam?</h4></li>
            <li>in Stock</li>
            <li>Evota./</li>
            <li><h5>Style name:C3MP65 Series</h5></li>
            <li><h5>Size: 55inch</h5></li>
            <div className='btn4'>
            <li><button onClick={()=> setCount(count-1)}><img  src="./src/assets/minus.svg" alt="" /></button><h3>{count}</h3><button onClick={()=> setCount(count+1)}><img src="./src/assets/plus.svg" alt="" /></button>
             </li></div>
             <div className='delete'>
             <li ><button onClick={() => setinvisible(false)}>Delete item</button></li>
             </div>  
               
                  
          </ul>
      </div>
      <div className='pricecart'>
        <img src="./src/assets/rupees1.svg" alt="" /><h4>54,456.00</h4>
      </div>
    </div>
)}
    </>
  )
}

export default Cartcard