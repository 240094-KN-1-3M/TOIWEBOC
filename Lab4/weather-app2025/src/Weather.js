import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Weather.css';
import WeatherCard from './WeatherCard.js';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [forecastData, setForecastData] = useState([]);

    const fetchData = async () => {
        try {
            // @ts-ignore
            const API_KEY = process.env.REACT_APP_API_KEY;
            const URL_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
            // const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&units=metric&appid=${API_KEY}`;
            // const URL = `https://api.openweathermap.org/data/2.5/forecast/daily?lat =${lat}&lon=${lon}&cnt=7&appid=${API_KEY}`;
            const URL_NOW = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
            let response = await axios.get(URL_NOW);
            setWeatherData(response.data);
            console.log(response.data); // Можна переглянути всі дані про погоду в журналі консолі

            response = await axios.get(URL_FORECAST);
            const dailyForecast = response.data.list
                .filter(item => item.dt_txt.includes("12:00:00"))
                .map(day => {
                    const { weather, dt_txt, wind, main } = day;
                    const { temp, feels_like, humidity, pressure } = main;
                    const { icon, description } = weather[0];
                    const windSpeed = wind.speed;
                    return {
                        dt_txt, temp, feels_like, description,
                        humidity, pressure, icon, windSpeed
                    }
                })

            setForecastData(dailyForecast);
            console.log(dailyForecast);
        } catch (error) {
            console.error(error);
            setWeatherData(null);
            if (error.response.status == 404) setErrorMessage('Не знайдено такого міста.')
            else setErrorMessage('')
        }
    };

    // useEffect(() => {
    //     fetchData();
    //     // eslint-disable-next-line
    // }, []);

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    };

    return (
        <div className="weather-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={handleInputChange}
                />
                <button type="submit">Get Weather</button>
            </form>
            <div>
                {
                    weatherData && <p>Зараз у {weatherData.name} {weatherData.main.temp}°C</p>
                }
            </div>
            <div className="cards">
                {
                    forecastData && Array.isArray(forecastData) && forecastData.length > 0 ? (
                        forecastData.map((day) => (
                            <WeatherCard weatherData={day} />
                        ))
                    ) : errorMessage ? (<p>{errorMessage}</p>)
                        : (<p style={{ 'width': '100%' }}>Зробіть пошук погоди за назвою міста</p>)
                }
            </div>
        </div >
    );

};
export default Weather;
