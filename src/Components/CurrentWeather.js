import React, {useLayoutEffect, useState} from 'react'
import "../Styles/App.css";

const WeatherImage = require("../Media/Clouds.png")
function CurrentWeather(props) {
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth();
    let year = newDate.getFullYear();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['Juanary', 'February', 'March', 'May', 'Jun', 'July', 'August', 'September', 'October', 'Nomberver', 'December'];
    let dayName = days[newDate.getDay()];
    let MonthName = months[month-1];

    return (
        props.DataFind 
        ?<div className="MainWeatherSection"> 
            <section className="WeatherImage" >
                <img src={WeatherImage} alt="WeatherimageCase" className="WeatherImg"></img>
            </section>
            <div className="CurrentWeather">
                <h1>{(props.Location).toString().charAt(0).toUpperCase() + (props.Location).toString().slice(1)}</h1>
                <h2>{`${dayName}${", "}${MonthName}${" "}${date}${", "}${year}`}</h2>
                <h1 className="MainTemp">{`${props.MainWeather.temp}${"°C"}`}</h1>
                <h1>{props.WeatherDetail[0].description}</h1>
                <h1>{props.MainWeather.name}</h1>
            </div>
            <section className="WeatherDetailsSection">
                <article>
                    <h1>{`${"Max: "}${props.MainWeather.temp_max}${"°C"}`}</h1>
                    <h1>{`${"Min: "}${props.MainWeather.temp_min}${"°C"}`}</h1>
                </article>
                <article>
                    <h1>{`${"Feels Like: "}${props.MainWeather.feels_like}${"°C"}`}</h1>
                    <h1>{`${"Humidity: "}${props.MainWeather.humidity}${"%"}`}</h1>
                </article>

            </section>
        </div>
        : <div><h1>Nothing Find</h1></div>
    )
}

export default CurrentWeather
