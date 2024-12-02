import React, {useState} from 'react'
import "./Rating.css"


const Rating = () => {
  const RatingStars = ({ totalStars = 5 }) => {
    const [rating, setRating] = useState(0);
  
    const handleRating = (index) => {
      setRating(index + 1);
    }

  return (
    <>
    <div id='image2'>
    <ul>
      <svg  key={index}
          onClick={() => handleRating(index)}
          onMouseEnter={() => handleRating(index)}
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill={index < rating ? getColor(rating) : 'yellow'} 
          xmlns=""
        >

       <li className='star'></li>
        {/* <img src="./src/assets/star.svg" alt="" /><img src="./src/assets/star.svg" alt="" /><img src="./src/assets/star.svg" alt="" /><img src="./src/assets/star.svg" alt="" /><img src="./src/assets/star.svg" alt="" /> */}
       <li>1345 ratings</li>
       <li>Contact nearby store</li>
    </ul><br />
    145+ bought this month
   <hr />
   </div>
 
   
   </>
  )
}

export default Rating