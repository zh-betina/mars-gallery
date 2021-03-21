import { useState } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";
import WeatherFeed from "./WeatherFeed/WeatherFeed";
import Gallery from "./Gallery/Gallery";

import './App.css';

function App() {
  let galleryState = false;
  const [isGalleryChosen, setIsGalleryChosen] = useState(galleryState);
  return (
    <BrowserRouter>
      <div className="App">
            <Sidebar galleryState={galleryState=> setIsGalleryChosen(galleryState)} />
            <Route path="/" exact component={Main} />
            <Route path="/gallery" component={()=> <Gallery galleryState={isGalleryChosen}/>} />
            {
                console.log(isGalleryChosen)
            }
            <WeatherFeed/>
      </div>
    </BrowserRouter>
  );
}

export default App;
