import React from 'react';

const Operators = (props) => {

    return (
        <div className="operators">
  	<button className={props.sty} onClick={props.press}>/</button>
  	  <button className={props.sty} onClick={props.press}>*</button>
  	    <button className={props.sty} onClick={props.press}>-</button>
  	<button className={props.sty} onClick={props.press}>+</button>
  	<button className={props.sty} onClick={props.press}>=</button>
  </div>
    )
}

export default Operators
