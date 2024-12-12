import React, {useState} from 'react'
import "./Rating.css"


const Rating = ({ totalStars = 5 }) => {
  
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
     
  return (
    <>
    <div id='image2'>
    <ul>
     <li className='rate'>{
     [1,2,3,4,5] .map((star) =>{
          <span
          key={star}
          onClick={() => setRating(star)} 
          onMouseEnter={() => setHover(star)} 
          onMouseLeave={() => setHover(0)} 
          style={{
            cursor: "pointer",
            color: star <= (hover || rating) ? "#FFD700" : "#D3D3D3", // Gold for selected, gray otherwise
            fontSize: "24px",
          }}>★</span>
     })}
          </li>
     
    
      
       <li >
        <img src="./src/assets/star.svg" alt="" /><img src="./src/assets/star.svg" alt="" /><img src="./src/assets/star.svg" alt="" /><img src="./src/assets/star.svg" alt="" /><img src="./src/assets/star.svg" alt="" /></li>
       <li>{rating} ratings</li>
       <li>Contact nearby store</li>
    </ul><br />
    145+ bought this month
   <hr />
   </div>
 
   
   </>
  );
};

export default Rating