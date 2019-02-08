import React from 'react';

const Weather = props => (
    <div className='weather_info'>
        { props.city && props.country && <p className='text-white'>Location: <span className='weather__value'>{props.city}, {props.country}</span></p>}
        { props.temperature && <p className='text-white'>Temperature: <span className='weather__value'>{props.temperature}</span> K</p>}
        { props.humidity && <p className='text-white'>Humidity: <span className='weather__value'>{props.humidity}</span></p>}
        { props.description && <p className='text-white'>Description: <span className='weather__value'>{props.description}</span></p>}
        { props.error && <p className='text-white'>Error: <span>{props.error}</span></p>}
    </div>
);

export default Weather;
