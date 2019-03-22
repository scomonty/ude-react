

const Header = (props) => {
	return (
			<header>
			<h1>{props.title}</h1>
			<span className='stats'>Players: {props.totalPlayers}</span>
			</header>
		);
}

const Player = (props) => {
	return (
		<div className="player">
		<span className="player-name">
		<button className="remove-player" onClick={ () => props.removePlayer(props.id) }>X</button>
			{props.name}
		</span>
		<Counter />
		</div>
		)
}
/*}

const Counter = (props) => {
	return (
		<div className="counter">
			<button className="counter-action decrement"> - </button>
			<span className="counter-score">{props.score}</span>
			<button className="counter-action increment"> + </button>
		</div>
		)
}
{*/

class Counter extends React.Component {
	state = {
		score: 0
	};

incrementScore() {
	this.setState( prevState => {
		return {
		score: prevState.score + 1
	}
	});
}

decrementScore = () => {
	this.setState( prevState  => {
		return {
		score: prevState.score - 1
	}
	})
}

	render() {
	return (
		<div className="counter">
			<button className="counter-action decrement" onClick={this.decrementScore}> - </button>
			<span className="counter-score">{this.state.score}</span>
			<button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
		</div>
		)
}
	}

class App extends React.Component {
	state = {
		players: [
{
	name: 'Scott',
	id:1
},
{
name: 'Eva',
id:2
},
{
	name:"Punkey",
	id:3
},
{
	name:'Butters',
	id:4
}
		]
	}

handleRemovePlayer = (id) => {
this.setState( prevState => {
	return {
	players: prevState.players.filter( p => p.id !== id )
	}
})
}

	render() {
	return (
<div className="scoreboard">
<Header title="Scoreboard" totalPlayers={ this.state.players.length } />
{this.state.players.map(
	player =>
	<Player name={player.name} id={player.id} key={player.id.toString()}  removePlayer={this.handleRemovePlayer} />
	)
}
</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
	);
