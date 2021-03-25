import { React, useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import Title from '../Title/Title';
import LatPhoto from './LatPhoto/LatPhoto';

import fetchData from '../services/fetchData';
import daysToFetch from '../utils/daysToFetch';

import './Main.css';

const useStyles = makeStyles((theme) => ({
  loader: {
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%'
  }
}));

const Main = ({ urlToFetch }) => {
  const classes = useStyles();
  const [loader, setLoader] = useState(true);
  const [fetchedData, setFetchedData] = useState({ camera_name: '', date: '', imgSrc: '' });
  const latestDate = daysToFetch(1);
  let data;
  let url;
  const method = 'GET';
  console.log(urlToFetch);

  if (urlToFetch !== '') {
    url = urlToFetch;
  } else {
    url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${latestDate[1].year}-${latestDate[1].month}-${latestDate[1].day}&api_key=${process.env.REACT_APP_API_KEY}`;
  }

  useEffect(() => {
    fetchData(data, url, method)
      .then((data) => {
        if (data.photos.length !== 0) {
          setFetchedData({ camera_name: data.photos[0].camera.full_name, date: data.photos[0].earth_date, imgSrc: data.photos[0].img_src });
        } else {
          setFetchedData({ message: 'No photos found for that day. Please, try the same date with another camera or another date.' });
        }
      })
      .then(() => setLoader(false));
  }, []);

  const photoNotAvail = () => {
    if (fetchedData.hasOwnProperty('message')) {
      return <p>{fetchedData.message}</p>;
    } else {
      return <LatPhoto camera={fetchedData.camera_name} date={fetchedData.date} imgSrc={fetchedData.imgSrc} />;
    }
  };
  return (
        <main className='Main'>
            <Title txt={urlToFetch === '' ? 'latest mars photo' : 'latest chosen photo' } />
            <section>
                {
                    loader
                      ? <>
                        <CircularProgress className={classes.loader} color='black' />
                        <p className='Main-loader'>Loading...</p>
                        </>
                      : photoNotAvail()
                }
            </section>
        </main>
  );
};

export default Main;
