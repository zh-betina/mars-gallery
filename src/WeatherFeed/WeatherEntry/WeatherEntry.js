import Icon from '@mdi/react';
import { mdiThermometerLines } from '@mdi/js';
import { mdiSnowflake } from '@mdi/js';
import { mdiFlower } from '@mdi/js';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { mdiLeafMaple } from '@mdi/js';
import { mdiWeatherWindy } from '@mdi/js';
import { mdiArrowCollapse } from '@mdi/js';

import "./WeatherEntry.css";

const WeatherEntry = props => {
    
    const SeasonIcon = () => {
        switch (props.season) {
            case "winter":
                <Icon path={mdiSnowflake} />
                break;
            case "spring":
                <Icon path={mdiFlower} />
                break;
            case "summer":
                <WbSunnyIcon />
                break;
            case "fall":
                <Icon path={mdiLeafMaple} />
                break;
            default:
                break;
        }
    }
    return (
        <div className="WeatherEntry-wrapper">
            {props.children}
            <div className="row">
                <p className="WeatherEntry-date">Sol {props.sol}</p>
                <p className="WeatherEntry-date">{props.First_UTC}</p>
            </div>
            <div className="row">
                <Icon path={mdiThermometerLines} /><p>Av. atmospheric temp.: {props.AT}°F</p>
            </div>
            <div className="row">
                <Icon path={mdiWeatherWindy} /><p>Av. horizontal wind speed: {props.HWS} m/s</p>
            </div>
            <div className="row">
                <Icon path={mdiArrowCollapse} /><p>Av. pressure: {props.PRE} Pa</p>
            </div>
            <div className="row">
                <p>Season: {props.Season}</p><SeasonIcon />
            </div>
        </div>
    )
}

export default WeatherEntry;