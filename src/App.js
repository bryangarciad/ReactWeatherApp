import React, { useState, useEffect } from 'react';
import Search from './Components/Search';
import MainWeatherSection from './Components/MainWeatherSection';
import axios from 'axios'
import "./Styles/App.css";
import Forecast from './Components/Forecast';

const api = {
  key: "fd2686ca0fdaea499bf31241c66e8014",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [Location, setLocation] = useState("London")
  const [MainWeather, setMainWeather] = useState({});
  const [WeatherDetail, setWeatherDetail] = useState([{}] );
  const [Find, setFind ] = useState(true);
  const [Count, setCount] = useState(0);
  const [Forecast,setForecast] = useState([{}]);
  const [FindForecast, setFindForecast ] = useState(true);
  const [CoordLocation, setCoordLocation] = useState({});

  const updateLocation = (newLocation) => { 
    setLocation(newLocation);
    axios.get(`${api.base}weather?q=${newLocation}&units=metric&APPID=${api.key}`)
      .then(res =>{
          setMainWeather(res.data.main);
          setWeatherDetail(res.data.weather);
          setCoordLocation(res.data.coord);
          console.log(res);
          setFind(true);
      })
      .catch((err) => {
        setFind(false);
      }) 
      
      axios.get(`${api.base}onecall?lat=${CoordLocation.lat}&lon=${CoordLocation.lon}&units=metric&APPID=${api.key}`)
      .then(res => {
        setForecast(res.data);
        setFindForecast(true);
        console.log(res);
      })
      .catch((err) =>
      setFindForecast(false))
  }

  function success(pos){
    let crd = pos.coords; 
    axios.get(`${api.base}weather?lat=${crd.latitude}&lon=${crd.longitude}&units=metric&appid=${api.key}`)
    .then(res =>{
      setLocation(res.data.name)
      setMainWeather(res.data.main);
      setWeatherDetail(res.data.weather);
      setCount(1);
      setFind(true);
      // console.log(res);
    })
    .catch((err) => {
      setFind(false);
    }) 
    axios.get(`${api.base}onecall?lat=${crd.latitude}&lon=${crd.longitude}&units=metric&APPID=${api.key}`)
    .then(res => {
      setForecast(res.data);
      setFindForecast(true);
      console.log(res);
    })
    .catch((err) =>
    setFindForecast(false))
  }

  useEffect(() => {
    if(Count === 0 ){
      navigator.geolocation.getCurrentPosition(success) 
    }
  })

  return (
    <div className="MainWrapper">
      <Search className="search" updateLocation = {updateLocation}></Search>
      <MainWeatherSection FindForecast = {FindForecast} Forecast={Forecast} Location={Location} MainWeather = {MainWeather} WeatherDetail ={WeatherDetail} DataFind ={Find}></MainWeatherSection>
    </div>
  );
}

export default App;
