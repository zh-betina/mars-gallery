import { useEffect, useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import WeatherEntry from "./WeatherEntry/WeatherEntry";

import fetchData from "../services/fetchData";

import "./WeatherFeed.css";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    position: "absolute",
    width: "16vw",
    top: "0",
    right: "0",
    zIndex: "10",
    paddingTop: "15rem"
  },
}));

const WeatherFeed = () => {
  const classes = useStyles();
  const [loader, setLoader] = useState(true);
  const [weatherEntries, setWeatherEntries] = useState(null);

  let data;
  let url = `https://api.nasa.gov/insight_weather/?api_key=${process.env.REACT_APP_API_KEY}&feedtype=json&ver=1.0`;
  let method = "GET";


  useEffect(() => {
    const loadedEntries = [];
    const keys = ["First_UTC", "AT", "HWS", "PRE", "Season"];

    fetchData(data, url, method)
      .then((data) => {
        console.log(data);

        for (const key in data.sol_keys) {
          loadedEntries.push({
            sol: data.sol_keys[key]
          })
        }

        loadedEntries.forEach((el, idx) => {
          keys.forEach(keysEl => {
            if (Object.keys(data[el.sol]).includes(keysEl)) {
              loadedEntries[idx][keysEl] = data[el.sol][keysEl];
              if (keysEl == "AT" || keysEl == "PRE" || keysEl == "HWS") {
                loadedEntries[idx][keysEl] = data[el.sol][keysEl].av;
              }
            }
          })
        });
        console.log(loadedEntries);
        setWeatherEntries(loadedEntries);
      })
      .then(() => setLoader(false));
  }, []);
  console.log(weatherEntries);
  return (
    <Paper className={classes.root} elevation={3}>
      <h3 className="Title-weather">Weather on Mars</h3>
      {
        loader ? <CircularProgress /> : weatherEntries.map((items, idx) => {
          return <WeatherEntry {...items} key={idx} />
        })
      }
    </Paper>
  )
}

export default WeatherFeed;