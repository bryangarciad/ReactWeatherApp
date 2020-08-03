import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import "../Styles/App.css";

export default class MainWeatherSection extends Component {
    constructor(props){
        super(props)
        this.state = {
            Location: props.Location
        };
        console.log(this.props);

    }
    render() {
        return (
            <div className="MainContent">
                <CurrentWeather className="currentWeather" Location={this.props.Location} MainWeather = {this.props.MainWeather} WeatherDetail ={this.props.WeatherDetail} DataFind ={this.props.DataFind}></CurrentWeather>
                <Forecast className="MainForecastSection" ForecastFind = {this.props.FindForecast} Forecast={this.props.Forecast} className="forecastWeather"></Forecast>
                {/* <Switch>
                    <Route exact path="/" component={CurrentWeather} Click ={this.handleClick}/>
                    <Route path="/Forecast" component={Forecast} />
                </Switch> */}
            </div>
        )
    }
}


// export default function MainWeatherSection() {
//     //Global state needed
//     const [Global, setGlobal] = useState("");

//     return (
//         <div className="MainContent">
//             <Switch>
//                 <Route exact path="/" component={CurrentWeather} />
//                 <Route path="/Forecast" component={Forecast} />
//             </Switch>
//         </div>
//     )
// }
