import React, { useEffect, Fragment } from 'react'
import "../Styles/App.css";
import HourlyForecast from './HourlyForecast'
import DayliForecast from './DayliForecast'

function Forecast(props) {
    
    useEffect(()=>{
        // console.log(props.Forecast);
    })

    return (
        props.ForecastFind ?
        <Fragment>
            <HourlyForecast  Forecast = {props.Forecast.hourly}></HourlyForecast>
            <DayliForecast Forecast={props.Forecast.daily}></DayliForecast>
        </Fragment>
        :
        <h1>No FORECAST</h1>
    )
}
export default Forecast