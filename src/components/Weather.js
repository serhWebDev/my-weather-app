import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

const Weather = props => (
    <div className='weather_info white-text'>
        { props.weather.city && props.weather.country &&
        <p className='text-white'>Location:
            <span className='weather__value'>{props.weather.city}, {props.weather.country}</span>
        </p>
        }
        { props.weather.temperature &&
        <p className='text-white'>Temperature:
            <span className='weather__value'>{props.weather.temperature}</span> K (<span className='weather__value'>{(props.weather.temperature - 273).toFixed(2)}</span> C)
        </p>
        }
        { props.weather.humidity &&
        <p className='text-white'>Humidity:
            <span className='weather__value'>{props.weather.humidity}</span>
        </p>
        }
        { props.weather.description &&
        <p className='text-white'>Description:
            <span className='weather__value'>{props.weather.description}</span>
        </p>
        }
        { props.error &&
        <p className='text-white'>Error:
            <span>{props.error}</span>
        </p>
        }
    </div>
);

export default Weather;
