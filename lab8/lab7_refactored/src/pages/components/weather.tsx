import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import "@/styles/weather.css";
import { cities } from "@/cities";


const CityCard: React.FC<CityCardProps> = ({ city, time, onClick, isActive }) => (
    <div className={`city ${isActive ? "active" : ""}`}>
        <img src={city.emblem} alt={city.name} />
        <div className="city_name" onClick={onClick}>{city.name}</div>
        <div>{city.country}</div>
        <div>{time}</div>
    </div>
);

const WeatherPage: NextPage = () => {
    const [currentTimes, setCurrentTimes] = useState<Record<string, string>>({});
    const [activeCity, setActiveCity] = useState<string | null>(null);

    const updateAllTimes = () => {
        const updated: Record<string, string> = {};
        cities.forEach(city => {
            updated[city.name] = new Date().toLocaleString("uk-UA", { timeZone: city.timezone });
        });
        setCurrentTimes(updated);
    };

    useEffect(() => {
        updateAllTimes();
    }, []);

    return (
        <div className="city_list">
            {cities.map(city => (
                <CityCard
                    key={city.name}
                    city={city}
                    time={currentTimes[city.name] || "..."}
                    onClick={() => {
                        setActiveCity(city.name);
                        updateAllTimes();
                    }}
                    isActive={activeCity === city.name}
                />
            ))}
        </div>
    );
};

export default WeatherPage;
