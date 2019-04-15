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
}

getNumber = (e) => {
	numbersToCount.push(e.target.innerText);
	this.setState({number: numbersToCount});
}


	render() {
			console.log(numbersToCount);
	return(
		<div id="calculator">
			<Output onChange={this.state.number} />
			<div className="ui inverted segment num-op">
				<div className="left">
		  		<Numbers sty="primary huge" getNumber={this.getNumber} clear={this.onClearClick} />
		  	</div>
		  	<div className="right">
	  			<Operators sty="orange huge" />
	  		</div>
		</div>
	</div>
	)
}
}

ReactDOM.render(<App />, document.getElementById('root'));
