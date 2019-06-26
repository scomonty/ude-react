import React from 'react';
import FoodToFork from './apis/FoodToFork';
import SearchBar from './components/SearchBar';
import ReceipeResult from './components/ReceipeResult';

class App extends React.Component {
  state = { receipeResults: [] };

        componentDidMount() {
    this.onTermSubmit('pizza');
  }

  onTermSubmit = async (term) => {
      const response = await FoodToFork.get('/search', {
        params: {
          q: term
        }
      });
      this.setState ({receipeResults: response.data.recipes})
    }

    render() {
      console.log(this.state.receipeResults);
  return (
    <div className="App">
    <SearchBar onFormSubmit={this.onTermSubmit} />
    <ReceipeResult searchResults={this.state.receipeResults} />
    </div>
  );
}
}

export default App;
