import React from 'react';
import ReactDOM from 'react-dom';
import Output from './Output';
import Numbers from './Numbers';
import Operators from './Operators';
import './index.css';


let numbersToCount=[];

class App extends React.Component {
state = {number: 0};


onClearClick = () => {
this.setState({number:0});
numbersToCount=[];
}

getNumber = (e) => {
	const whatWasPressed = e.target.innerText;
	numbersToCount.push(whatWasPressed);
	this.setState({number: numbersToCount});
}

startMath = (e) => {
	const numbersOne = numbersToCount,
	whatWasPressed = '+';
	if (whatWasPressed != '='){
		const numberOne = parseFloat(numbersOne.join(''));
		console.log(typeof numberOne )
const numbersTwo = numberOne whatWasPressed numberOne;
console.log(numbersTwo);
numbersToCount = [];
}

}


	render() {
	return(
		<div id="calculator">
			<Output onChange={this.state.number} numbersToOutput={numbersToCount} />
			<div className="ui inverted segment num-op">
				<div className="left">
		  		<Numbers sty="primary huge" getNumber={this.getNumber} clear={this.onClearClick} />
		  	</div>
		  	<div className="right">
	  			<Operators sty="orange huge" startMath={this.startMath} />
	  		</div>
		</div>
	</div>
	)
}
}

ReactDOM.render(<App />, document.getElementById('root'));
