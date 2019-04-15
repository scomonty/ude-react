import React from 'react';

const Output = (props) => {
	return(
<div className="outputContainer">
<div className="output">{`${props.onChange}`}</div>
</div>
	)
}

export default Output;
