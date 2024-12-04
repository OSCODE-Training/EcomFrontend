import React, {useState} from 'react'
import "./Model1.css"

const Model1 = () => {
  const [isInFirstli, setInFirstli] = useState(true);
  const [isInSecondli, setInSecondli] = useState(true);
  const [isInThirdli, setInThirdli] = useState(true);
  const [isInFourthli, setInFourthli] = useState(true);
  const [isInFourtli, setInFourtli] = useState("");
  const moveModelno = (props1) => {

    if (props1=="R3579") { 
      setInFirstli((prevState) => !prevState);
      // setInFourtli("R3579")
      setInSecondli((prevState) => prevState);
      setInThirdli((prevState) => prevState);
      setInFourthli((prevState) => prevState);
      
    }     
    if (props1 =="C450") {
      setInSecondli((prevState) => !prevState);
      // setInFourtli("C450")
      setInThirdli((prevState) => prevState);
      setInFourthli((prevState) => prevState);
    }
    if (props1 =="C435") {
      setInThirdli((prevState) => !prevState);
      // setInFourtli("C435")
    }
    if (props1 =="H568") {
      setInFourthli((prevState) => !prevState);
    }
  }

  return (
    <>
     <div id='model1'>
                <h2>Model Name:{!isInFirstli && <h3>{isInFourtli}</h3> }{!isInSecondli && <h3>C450</h3>}{!isInThirdli && <h3>C435</h3>}{!isInFourthli && <h3>H568</h3>}</h2>
                <ul>
                    <li onClick={()=> moveModelno("R3579")}>{isInFirstli && <h3>R3579</h3>}</li>
                    <li onClick={()=> moveModelno("C450")}>{isInSecondli && <h3>C450</h3>}</li>
                    <li onClick={()=> moveModelno("C435")}>{isInThirdli && <h3>C435</h3>}</li>
                    <li onClick={()=> moveModelno("H568")}>{isInFourthli && <h3>H568</h3>}</li> 
                </ul>
                 
               </div>
      
    </>
  )
}

export default Model1