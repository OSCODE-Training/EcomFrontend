import React, { useState } from 'react';
import './Model1.css';

const Model1 = () => {
  const [isInFirstli, setInFirstli] = useState(true);
  const [isInSecondli, setInSecondli] = useState(true);
  const [isInThirdli, setInThirdli] = useState(true);
  const [isInFourthli, setInFourthli] = useState(true);

  const moveModelno = (props1) => {
    if (props1 === 'R3579') {
      setInFirstli((prevState) => !prevState);
    }
    if (props1 === 'C450') {
      setInSecondli((prevState) => !prevState);
    }
    if (props1 === 'C435') {
      setInThirdli((prevState) => !prevState);
    }
    if (props1 === 'H568') {
      setInFourthli((prevState) => !prevState);
    }
  };

  const onclickback = () => {
    setInFirstli(true); // Corrected: Call the state updater function
    setInSecondli(true);
    setInThirdli(true);
    setInFourthli(true);
  };

  return (
    <>
      <div id="model1">
        <h2>
          Model Name:
          {!isInFirstli && <h3>R3579</h3>}
          {!isInSecondli && <h3>C450</h3>}
          {!isInThirdli && <h3>C435</h3>}
          {!isInFourthli && <h3>H568</h3>}
        </h2>
        <ul>
          <li onClick={() => moveModelno('R3579')}>{isInFirstli && <h3>R3579</h3>}</li>
          <li onClick={() => moveModelno('C450')}>{isInSecondli && <h3>C450</h3>}</li>
          <li onClick={() => moveModelno('C435')}>{isInThirdli && <h3>C435</h3>}</li>
          <li onClick={() => moveModelno('H568')}>{isInFourthli && <h3>H568</h3>}</li>
        </ul>
        <button onClick={onclickback}>Reset</button>
      </div>
    </>
  );
};

export default Model1;
