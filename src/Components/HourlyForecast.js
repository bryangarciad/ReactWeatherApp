import React, { Fragment, useState, useEffect } from 'react'
import CanvasJSReact from '../CanvasJs/canvasjs.react'
import Forecast from './Forecast';
import "../Styles/App.css";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function HourlyForecast(props) {
    const [Count, setCount] = useState(0);
    const [DataPoints, setDataPoints] = useState([
    ]);

    const Options = { 
        animationEnabled: true,
        backgroundColor: "rgba(255,255,255,0)",
        title: {
        },
        data: [{				
                type: "area",
                fillColor: "black",
                lineColor:"black",
                lineThickness: 3,
                dataPoints: DataPoints
        }]
    }

    function UpdateData(){
        if(Array.isArray(props.Forecast)){
            const currentHour = new Date().getHours();
            let leftHour =  24 - currentHour;
            console.log(leftHour);
            const newDataList =  props.Forecast.map((item) => {
                if(leftHour >= 0){
                 leftHour = leftHour-1;
                 return {label: new Date(item.dt * 1000).getHours() + ":00", y: item.temp, color: "white"}
                 
                }
             })
             setDataPoints(newDataList.filter(item => item));
             setCount(1);
         } 
    }
    useEffect(()=>{
        Count === 0 && UpdateData();
    })

    return (
        <Fragment>
    
            <CanvasJSChart options = {Options} />
    
        </Fragment>
    )
}

export default HourlyForecast
