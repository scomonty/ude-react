import React from 'react';
import logo from './logo.svg';
import { UserInput } from './UserInput';
import { UserOutput } from './UserOutput';

class App extends React.Component {
state = {
  name: 'Scott',
  age: '37',
  sex: 'male'
}

userNameChanged =(event) => {
  this.setState({name: event.target.value})

}

  render() {
    return (
        <div>
          <UserInput changed={this.userNameChanged} currentName={this.state.name} />
          <UserOutput name={this.state.name} age={this.state.age} sex={this.state.sex} />
        </div>
    )
  }
}

export default App;
