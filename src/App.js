import React, { Component } from 'react';

import APIkey from './config';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from "./components/Weather";

import './App.css';

const API_KEY = APIkey.APIkey;

class App extends Component {
    state = {
        quotes: undefined,
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    };
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.city.value;
        const country = e.target.country.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
        const data = await api_call.json();
        if (city && country){
            console.log(data);
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ''
            })
        } else {
            console.log(data);
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: 'Please, enter the value "city" or "country"'
            })
        }
    };
    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-xs-12 col-sm-12 col-md-5">
                                <Titles />
                            </div>
                            <div className="formAndWeather col-xs-12 col-sm-12 col-md-7">
                                <Form getWeather={this.getWeather}/>
                                <Weather
                                    temperature={this.state.temperature}
                                    city={this.state.city}
                                    country={this.state.country}
                                    humidity={this.state.humidity}
                                    description={this.state.description}
                                    error={this.state.error}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;
