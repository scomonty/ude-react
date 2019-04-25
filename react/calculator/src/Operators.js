import React from 'react';

const Operators = (props) => {
    const opps = ['/', '*', '-', '+', '='];
    const operatorButtons = opps.map((opp) => {
        return <button className={`ui inverted button operator ${props.sty}`} key={opp} onClick={props.press} >{opp}</button>
    });

    return (
        <div className="operators">
  	{operatorButtons}
  </div>
    )
}

export default Operators
