import React from 'react';


export const UserInput = (props) => {
	return (
<div>
<label>Enter Name</label>
<input type="text" onChange={props.changed} value={props.currentName}/>
</div>
		)
}
