import React from 'react';


const WeatherDetail = ({weather}) => {

	return (
<div>
<div>{weather.shortForecast}</div>
<div>{weather.temperature}&#176;F</div>
<div>{weather.windDirection} {weather.windSpeed}</div>
</div>
		)
}


export default WeatherDetail;
