import React, { Component } from 'react';

const mapStyle = {
    width: '100px',
    height: '100%'
};

class WeatherMap extends Component {
    render () {
        function loadMapScenario() {
            var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
                center: new Microsoft.Maps.Location(51.50632, -0.12714),
                mapTypeId: Microsoft.Maps.MapTypeId.aerial,
                zoom: 10 });
        };
        return (
            <div className='map'>
                <div id='myMap' style={mapStyle}></div>
            </div>
        );
    }
};

export default WeatherMap;
