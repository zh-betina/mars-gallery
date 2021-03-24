// import Icon from 'mdi-react';
import React from 'react';

import './WeatherEntry.css';

const WeatherEntry = props => {
  const dateFormat = props.First_UTC.substr(0, 10);
  return (
        <div className="WeatherEntry-wrapper">
            {props.children}
            <div className="row">
                <p className="WeatherEntry-date">Sol {props.sol}</p>
                <p className="WeatherEntry-date">{dateFormat}</p>
            </div>
            <div className="row">
                <p>Av. atmospheric temp.: {props.AT}°F</p>
            </div>
            <div className="row">
                <p>Av. horizontal wind speed: {props.HWS} m/s</p>
            </div>
            <div className="row">
                <p>Av. pressure: {props.PRE} Pa</p>
            </div>
            <div className="row">
                <p>Season: {props.Season}</p>
            </div>
        </div>
  );
};

export default WeatherEntry;
