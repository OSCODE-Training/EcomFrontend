import React,{useState} from 'react'
import "./Comment.css"

const Comment = () => {
  const [inputText, setInputText] = useState(""); 
  const [outputText, setOutputText] = useState([]); 

  const handleMoveText = () => {
    // setOutputText.push()
    console.log(outputText)
    // setOutputText(inputText); 
    setInputText("");
    setOutputText([...outputText, inputText]); 
  }
  return (
    <>
    
    
     <div id='inputcustomer'>
     {/* <label htmlFor="inputText"></label> */}
      <input  id="inputText" value={inputText} type="text" onChange={(e) => setInputText(e.target.value)} placeholder='Write a Review about item.......' /> 
      <button onClick={handleMoveText}>Comment</button>
     <div id='outputreview'>
          {outputText.map((item, index) => (
          <li key={index}>{item}</li> 
        ))}
     </div>
     </div>



                    
    
    </>
  )
}

export default Comment
