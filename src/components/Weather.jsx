import { useEffect, useState } from 'react';
import '../App.css';

function Weather() {
    const [weather, setWeather] = useState(null);
    const APIKey = '895284fb2d2c50a520ea537456963d9c'
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=stockholm&units=metric&appid=${APIKey}`;

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(json => setWeather(json))
            .catch(error => console.log(error));
    }, [URL])

    return (
        <div className='Widget Weather'>
            <p>
                {weather && weather.main.temp} Celsius
            </p>
        </div>
    )
}

export default Weather;
