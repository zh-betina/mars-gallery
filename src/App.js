import { Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";

import './App.css';

console.log(process.env.REACT_APP_API_KEY);


function App() {
  return (
    <BrowserRouter>
      <div className="App">
            <Sidebar />
            <Route path="/" exact component={Main} />
      </div>
    </BrowserRouter>
  );
}

export default App;
