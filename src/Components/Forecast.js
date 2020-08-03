import React, { useEffect } from 'react'
import "../Styles/App.css";
import HourlyForecast from './HourlyForecast'

function Forecast(props) {
    
    useEffect(()=>{
        // console.log(props.Forecast);
    })

    return (
        props.ForecastFind ?
        <div className="MainForecastSection">
            <HourlyForecast Forecast = {props.Forecast.hourly}></HourlyForecast>
            {/* <DayliForecast></DayliForecast> */}
        </div>
        :
        <h1>No FORECAST</h1>
    )
}
export default Forecast