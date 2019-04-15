import React from 'react';


const Numbers = (props) => {
// create the button elements in the correct order and loop through
  const buttonNumbers = [ 7,8,9,4,5,6,3,2,1,0,'.' ], buttonElements = [];
  for (const [index, value] of buttonNumbers.entries()) {
    buttonElements.push(<button key={index} className={`ui inverted button ${props.sty}`} onClick={props.getNumber}>{value}</button>)
  }
	return(
		<div className="numbers">
		  <button className={`ui inverted button huge red clear`} data-action="clear" onClick={props.clear}>AC</button>
      {buttonElements}
    </div>
  )
}

export default Numbers;
