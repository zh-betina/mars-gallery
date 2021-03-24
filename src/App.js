import React, { useState } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import WeatherFeed from './WeatherFeed/WeatherFeed';
import Gallery from './Gallery/Gallery';

import './App.css';

function App () {
  const [urlToFetch, setUrlToFetch] = useState('');

  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar setUrlToFetch={setUrlToFetch}/>
        <Route path="/" exact component={() => <Main urlToFetch={urlToFetch} />} />
        <Route path="/gallery" component={Gallery} />
        <WeatherFeed />
      </div>
    </BrowserRouter>
  );
}

export default App;
