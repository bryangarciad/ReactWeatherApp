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
        toolTip: {
        },
        animationEnabled: true,
        backgroundColor: "rgba(255,255,255,0)",
        axisY:{
            labelFontColor: "rgba(255,255,255,0)",
            gridColor:  "rgba(0,0,0,0)",
            lineColor: "rgba(0,0,0,0)",
            tickColor: "rgba(0,0,0,0)"
        },
        axisX:{labelFontColor: "white"},
        data: [{				
                type: "area",
                color: "white",
                lineColor:"cian",
                fillOpacity: .3,
                lineThickness: 5,
                dataPoints: DataPoints,
                // indexLabel: "{y}"
        }]
    }

    function UpdateData(){
        if(Array.isArray(props.Forecast)){
            // const currentHour = new Date().getHours();
            // let leftHour =  24 - currentHour;
            let leftHour = 12;
            const newDataList =  props.Forecast.map((item) => {
                if(leftHour >= 0){
                 leftHour = leftHour-1;
                 return {label: new Date(item.dt * 1000).getHours() + ":00", y: item.temp, color: "cian"}
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
