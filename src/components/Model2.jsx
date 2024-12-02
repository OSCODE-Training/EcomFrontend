import React, {useState} from 'react'
import"./Model2.css"

const Model2 = () => {
  const [isInFirstli1, setInFirstli1] = useState(true);
  const [isInSecondli1, setInSecondli1] = useState(true);
  const [isInThirdli1, setInThirdli1] = useState(true);
  const [isInFourthli1, setInFourthli1] = useState(true);
  const moveModelno1 = (props) => {
   
    if (props == "45inch") {
      setInFirstli1((prevState) => !prevState);
    }
    if (props =="55inch") {
      setInSecondli1((prevState) => !prevState);
    }
    if (props =="65inch") {
      setInThirdli1((prevState) => !prevState);
    }
    if (props =="75inch") {
      setInFourthli1((prevState) => !prevState);
    }
      
  }

  return (
    <>
    <div id='model2'>
    <h2>Size:{!isInFirstli1 && <h3>45inch</h3> }{!isInSecondli1 && <h3>55inch</h3> }{!isInThirdli1 && <h3>65inch</h3>}{!isInFourthli1 && <h3>75inch</h3>}</h2>
    <ul>
        <li  onClick={()=>moveModelno1("45inch")}>{isInFirstli1 && <h3>45inch</h3>}</li>
        <li onClick={()=>moveModelno1("55inch")} >{isInSecondli1 && <h3>55inch</h3>}</li>
        <li onClick={()=>moveModelno1("65inch")} >{isInThirdli1 && <h3>65inch</h3>}</li>
        <li onClick={()=>moveModelno1("75inch")} >{isInFourthli1 && <h3>75inch</h3>}</li>
        
    </ul>
   </div>
    <hr />
   <br />
   
   </>
  )
}

export default Model2