import React from 'react';

const Output = (props) => {
	const numbers = props.numbersToOutput.map((number) => {
        return `${number}`
    });

	return(
	<div className="ui input">
  <input type="text" readOnly value={numbers.join('')} />
</div>
	)
}

export default Output;
