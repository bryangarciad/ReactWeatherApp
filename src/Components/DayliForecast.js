import React, {useEffect, useState} from 'react'
import WeatherCard from './WeatherCard'

function DayliForecast(props) {
    const [DataList, setDataList] = useState([{}])
    const [Count, setCount] = useState(0)
    function UpdateForecast(){
        if(Array.isArray(props.Forecast)){
             const newDataList = props.Forecast.map((item) => {
                return {dt: new Date(item.dt * 1000), tempMin: item.temp.min, tempMax: item.temp.max, weather: item.weather[0].main}
            })
            setDataList(newDataList);
            setCount(1);
        }
        else{

        }
    }

    useEffect(() => {
       Count === 0 && UpdateForecast()

    })
    
    return (
        <div className="DailyForecast">
            {DataList.map((item)=>(
                <WeatherCard tempMax={item.tempMax} tempMin={item.tempMin} dt={item.dt}></WeatherCard>
            ))}
            
        </div>
    )
}

export default DayliForecast
