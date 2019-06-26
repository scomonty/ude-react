import React from 'react';
import ReactDOM from 'react-dom';
import WeatherDetail from './WeatherDetail';
import LocationDetail from './LocationDetail';

class WeatherApi extends React.Component {
    //set our initial state to empty array
    state = { weatherData: [], hourlyWeatherData: [], errorMessge: '' };

    componentWillMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) =>
            fetch(`https://api.weather.gov/points/${position.coords.latitude},${position.coords.longitude}`)
            .then((response) => response.json())
            //set the state for weatherData
            .then((responseData) => this.setState({ weatherData: responseData }))
            //call getLocalForcast one api data is returned and make second call to get local forecast
            .then(() => this.getLocalForcast(this.state.weatherData)),
            (err) => this.setState({ errorMessge: err.message })
        );
    }

    getLocalForcast(responseData) {
        //once we have the location forecast URL make call to second API for forecast details.
            const location = responseData.properties.forecastHourly;
            fetch(location)
                .then((response) => response.json())
                //set the state to 5 day forecast data
                .then((responseData) => this.setState({ hourlyWeatherData: responseData.properties.periods }));
        }

    renderWeather() {
        return this.state.hourlyWeatherData.map(weather => <WeatherDetail key={weather.number} weather={weather} />);
    }
    renderLocation() {
        if (this.state.weatherData.hasOwnProperty('properties')) {
            return <LocationDetail location={this.state.weatherData.properties.relativeLocation.properties} />
        }
    }


    render() {
        return (
            <div>
{this.renderLocation()}
{this.renderWeather()}
			</div>
        )
    }
}

export default WeatherApi;
