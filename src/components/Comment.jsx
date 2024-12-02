import React,{useState} from 'react'
import "./Comment.css"

const Comment = () => {
  const [inputText, setInputText] = useState(""); 
  const [outputText, setOutputText] = useState(""); 

  const handleMoveText = () => {
    setOutputText(inputText); 
    setInputText(""); 
  }
  return (
    <>
    
    
     <div id='inputcustomer'>
     {/* <label htmlFor="inputText"></label> */}
      <input  id="inputText" value={inputText} type="text" onChange={(e) => setInputText(e.target.value)} placeholder='Write a Review about item.......' /> 
      <button onClick={handleMoveText}>Comment</button>
     <div id='outputreview'>
          {outputText}
     </div>
     </div>



                    
    
    </>
  )
}

export default Comment
