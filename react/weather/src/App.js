 import './style/App.css';
import React from 'react';
import logo from './logo.svg';
import WeatherAPI from './WeatherAPI';

function App() {
  return (
<div className='app'>
<WeatherAPI />
</div>
    );
}

export default App;
