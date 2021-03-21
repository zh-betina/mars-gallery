import { useEffect, useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import Title from "../Title/Title";
import LatPhoto from "./LatPhoto/LatPhoto";

import fetchData from "../services/fetchData";
import getDate from "../utils/getDate";

import "./Main.css";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#f2edd7',
        display: "flex",
        flexDirection: "column"
    },
}));

const Main = () => {
    const classes = useStyles();
    const [loader, setLoader] = useState(true);
    const [fetchedData, setFetchedData] = useState({camera_name: "", date: "", imgSrc: ""});
    const todayDate = getDate();
    let data;
    let url;
    let method = "GET";
    const storedDate = JSON.parse(localStorage.getItem("date"));
    if(storedDate === null){
        url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${todayDate.year}-${todayDate.month}-${todayDate.day}&api_key=${process.env.REACT_APP_API_KEY}`;
    } else {
        url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${todayDate.year}-${todayDate.month}-${todayDate.day}&api_key=${process.env.REACT_APP_API_KEY}`
    }

    console.log(storedDate);

    console.log(localStorage.getItem("date"));
    useEffect(() => {
        fetchData(data, url, method)
        .then((data) => {
            setFetchedData({camera_name: data.photos[0].camera.full_name, date: data.photos[0].earth_date, imgSrc: data.photos[0].img_src})
            localStorage.clear();
        })
        .then(()=> setLoader(false));
    }, []);

    return (
        <main className="Main">
            <Title txt="latest mars photo" />
            <section>
                {
                    loader ? <Backdrop className={classes.backdrop} open={loader}>
                        <CircularProgress color="inherit" />
                        <p className="Main-loader">Loading...</p>
                    </Backdrop> : <LatPhoto camera={fetchedData.camera_name} date={fetchedData.date} imgSrc={fetchedData.imgSrc}/>
                }

            </section>
        </main>
    )
}

export default Main;