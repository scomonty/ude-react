import React from 'react';

const Output = (props) => {

	return(
	<div className="ui input">
  <input type="text" readOnly value={props.total} />
</div>
	)
}

export default Output;
