import React, { useEffect } from 'react'
import "../Styles/App.css";

const Clouds = require("../Media/Clouds.png");
const Clear = require("../Media/Clear.png");
const Rain = require("../Media/Rain.png");

export default function weatherCard(props) {
    function getPhoto(description){
        switch(description){
            case "Clouds":
                return Clouds
            case "Clear":
                return Clear
            case "Rain":
                return Rain
            default:
                return ""
        }
    }

    return (
        <div className="weatherCard">
            <h5>{typeof props.dt !== undefined?  props.dt: "" }</h5>
            <img src={getPhoto(props.weather)} alt={props.weather} className="SmallWeatherImg"></img>
            <h3>{props.day} °C</h3>
            <h5>Max: {props.tempMax} °C</h5>
            <h5>Min: {props.tempMin} °C</h5>
        </div>
    )
}
