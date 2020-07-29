import React, {useLayoutEffect, useState} from 'react'
import "../Styles/App.css";
import axios from "axios"


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
        ? <div className="CurrentWeather">
            <img></img>
            <h1>{(props.Location).toString().charAt(0).toUpperCase() + (props.Location).toString().slice(1)}</h1>
            <h2>{`${dayName}${", "}${MonthName}${" "}${date}${", "}${year}`}</h2>
            <h1 className="MainTemp">{props.MainWeather.temp}</h1>
            <h1>{props.WeatherDetail[0].main}</h1>
            <h1>{props.MainWeather.name}</h1>
        </div>
        : <div><h1>Nothing Find</h1></div>
    )
}

export default CurrentWeather
