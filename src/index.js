import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {words} from "./RandomWords";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Help from "./Components/Help/Help"

function getrandomWord(length){
    let randomIndex = Math.floor(Math.random() * length);
    return words[randomIndex].toUpperCase();
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Header/>
        <Route path="/" exact={true}
               render={() =>
                   <App word={getrandomWord(words.length)}/>}
        />
        <Route path="/help" component={Help}/>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


