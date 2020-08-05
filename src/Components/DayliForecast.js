import React, {useEffect, useState} from 'react'
import WeatherCard from './WeatherCard'

function DayliForecast(props) {
    const [DataList, setDataList] = useState([{}])
    const [Count, setCount] = useState(0)
    const months =["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
    function UpdateForecast(){
        if(Array.isArray(props.Forecast)){
             const newDataList = props.Forecast.map((item) => {
                console.log(item.weather[0].main);
                return {
                    dt:  months[new Date(item.dt * 1000).getMonth()] +"/"+ new Date(item.dt * 1000).getDate(), 
                    tempMin: item.temp.min, 
                    tempMax: item.temp.max, 
                    weather: item.weather[0].main,
                    day: item.temp.day
                }
                
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
            {DataList.map((item, key)=>(
                <WeatherCard key={key} tempMax={item.tempMax} tempMin={item.tempMin} dt={item.dt} day={item.day} weather={item.weather}></WeatherCard>
            ))}
            
        </div>
    )
}

export default DayliForecast
