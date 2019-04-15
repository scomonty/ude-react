import React from 'react';


const Operators = (props) => {
	return(
	<div className="operators">
  <button className={`ui inverted button operator ${props.sty}`} data-action="divide">&divide;</button>
  <button className={`ui inverted button operator ${props.sty}`} data-action="multiply">&times;</button>
  <button className={`ui inverted button operator ${props.sty}`} data-action="subtract">&#45;</button>
  <button className={`ui inverted button operator ${props.sty}`} data-action="add">&#43;</button>
  <button className={`ui inverted button operator ${props.sty}`} data-action="calculate">&#61;</button>
  </div>
  )
}

export default Operators
