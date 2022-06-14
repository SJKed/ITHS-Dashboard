import { useEffect, useState } from 'react';
import sun from '../assets/weather_icons/sun.png';
// import cloud from '../assets/weather_icons/cloud.png';
// import rain from '../assets/weather_icons/rain.png';
// import haze from '../assets/weather_icons/haze.png';
// import partly_cloudy from '../assets/weather_icons/partly_cloudy.png';
// import snow from '../assets/weather_icons/snow.png';
// import wind from '../assets/weather_icons/wind.png';
// import fog from '../assets/weather_icons/fog.png';
// import storm from '../assets/weather_icons/storm.png';
import '../App.css';
import './component_styles/Weather.css';

function Weather() {
    const [weather, setWeather] = useState(null);
    const APIKey = '895284fb2d2c50a520ea537456963d9c'
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=liljeholmen&units=metric&appid=${APIKey}`;

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                setWeather(data);
                console.log(data);
            })
            .catch(error => console.log(error));
    }, [URL])

    return (
        <div className='Widget Weather'>
            <h2 id="city">{weather && weather.name}</h2>
            <p id="temp">{weather && weather.main.temp} C</p>
            <p id="feelsLike">(Feels like {weather && weather.main.feels_like} C)</p>
            <img src={sun} id="weatherImg" alt="sun" />
            <p id="windspeed">Wind whoosing at {weather && weather.wind.speed} m/s</p>
        </div>
    )
}

export default Weather;
