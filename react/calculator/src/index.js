import React from 'react';
import ReactDOM from 'react-dom';
import Output from './Output';
import Numbers from './Numbers';
import Operators from './Operators';
import './index.css';

let firstNum = '';
let secondNum = '';
let opperatorNotPressed = true;
let opperator = '';
const addEmUp = (x, y) => { return x + y; };
const subtract = (x, y) => { return x - y; };
const multiply = (x, y) => { return x * y; };
const divide = (x, y) => { return x / y; };




class App extends React.Component {
    state = { number: 0 };

    onClearClick = () => {
    	   //on ac button press reset state to 0 and clear out number variables;
        this.setState({ number: 0 });
        firstNum = '';
        secondNum = '';
        opperatorNotPressed = true;
				opperator = '';
    }

    getKeyPress = (e) => {
    	//get the button that was pressed
        const whatWasPressed = e.target.innerText;
      //check if a number or decimal - not an opperator
        if (whatWasPressed !== '+' && whatWasPressed !== '-' && whatWasPressed !== '*' && whatWasPressed !== '/' && whatWasPressed !== '=') {
      //prevent starting out number with string of zero's
            if (this.state.number === 0 && whatWasPressed === '0') {}
            else {
                firstNum = firstNum + whatWasPressed;
                this.setState({ number: firstNum });
            }
        }
        //if not a number or decimal its an opperator
        else {
            if (this.state.number > 0) {
                //check if first time pressing opperator - if so we still need second set of numbers.
                if (opperatorNotPressed) {
                    opperator = whatWasPressed;
                    opperatorNotPressed = false;
                } else if(opperatorNotPressed === false && firstNum !== '' && secondNum !== '') {
                    firstNum = parseInt(firstNum);
                    if (opperator === '+') {
                        secondNum = addEmUp(secondNum, firstNum);
                        this.setState({ number: secondNum });
                        firstNum = '';
                        opperatorNotPressed = true;
                    }
                    if (opperator === '-') {
                        secondNum = subtract(secondNum, firstNum)
                        this.setState({ number: secondNum });
                        firstNum = '';
                        opperatorNotPressed = true;
                    }
                    if (opperator === '*') {
                        secondNum = multiply(secondNum, firstNum)
                        this.setState({ number: secondNum });
                        firstNum = '';
                        opperatorNotPressed = true;
                    }
                    if (opperator === '/') {
                        secondNum = divide(secondNum, firstNum)
                        this.setState({ number: secondNum });
                        firstNum = '';
                        opperatorNotPressed = true;
                    }
                }
                if (firstNum !== ''){
                secondNum = parseInt(firstNum);
                firstNum = '';
              }
            }
        }
    }

    render() {
        return (
            <div id="calculator">
			<Output total={this.state.number} />
			<div className="ui inverted segment num-op">
				<div className="left">
		  		<Numbers sty="primary huge" clear={this.onClearClick} press={this.getKeyPress} />
		  	</div>
		  	<div className="right">
	  			<Operators sty="ui inverted button orange huge operator" press={this.getKeyPress} />
	  		</div>
		</div>
	</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
