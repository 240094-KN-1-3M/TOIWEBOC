import React from 'react';
import './WeatherCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faTint, faThermometerHalf, faCompressAlt } from '@fortawesome/free-solid-svg-icons';

const WeatherCard = ({ weatherData }) => {
    const {
        dt_txt, temp, feels_like, description,
        humidity, pressure, icon, windSpeed
    } = weatherData;

    const date = new Date(dt_txt).toLocaleDateString();
    const day = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П’ятниця', 'Субота'][new Date(dt_txt).getDay()];

    return <div className="weather-card">
        <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weather icon"
            className="weather-icon"
        />

        <p>{day} <br /> {date}</p>
        <p>Description: {description}</p>
        <p>
            <FontAwesomeIcon icon={faThermometerHalf} className="fa-icon" />
            Temperature: {temp}°C
        </p>
        <p>
            <FontAwesomeIcon icon={faThermometerHalf} className="fa-icon" />
            Feels like: {feels_like}°C
        </p>
        <p>
            <FontAwesomeIcon icon={faTint} className="fa-icon" />
            Humidity: {humidity}%
        </p>
        <p>
            <FontAwesomeIcon icon={faCompressAlt} className="fa-icon" />
            Pressure: {pressure}
        </p>
        <p>
            <FontAwesomeIcon icon={faWind} className="fa-icon" />
            Wind Speed: {windSpeed}m/s
        </p>
    </div>
}

export default WeatherCard;
