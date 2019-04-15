import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App extends React.Component {
    state = { number: 0 };

    increment = () => this.setState({ number: this.state.number +1 });
    decrement = () => this.setState({ number: this.state.number -1 });
    reset = () => this.setState({number: 0});

    render() {
        return <div className='app-display'>
	<h1>A simple counter</h1>
	<h2>{this.state.number}</h2>
	<button className="ui button" onClick={this.increment}>Increment</button>
<button className="ui button" onClick={this.decrement}>Decrement</button>
<button className="ui button reset" onClick={this.reset}>Reset</button></div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
