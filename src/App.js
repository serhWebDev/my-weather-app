import React, { Component } from 'react';

import Titles from './components/Titles';
import Form from './components/Form';
import './App.css';

const API_KEY = '8ac30abc28e4020b28c829281ddf543e';

class App extends Component {
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.city.value;
        const country = e.target.country.value;
        console.log(country);
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
        const data = await api_call.json();
        console.log(data);
    };
    render() {
        return (
            <div className="App">
                <Titles />
                <Form getWeather={this.getWeather}/>
            </div>
        );
    }
}

export default App;
