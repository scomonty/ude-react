import React from 'react';


const Numbers = (props) => {
// create the button elements in the correct order and loop through with map
  const buttonNumbers = [ 7,8,9,4,5,6,1,2,3,0,'.' ];
  const buttonNumber = buttonNumbers.map((number) => {
    return <button key={number} className={`ui inverted button ${props.sty}`} onClick={props.press} >{number}</button>
  });
	return(
		<div className="numbers">
		  <button className={`ui inverted button huge red clear`} onClick={props.clear}>AC</button>
          {buttonNumber}
    </div>
  )
}

export default Numbers;
