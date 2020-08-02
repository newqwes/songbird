import { state, subscribe } from "./redux/store";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import { BrowserRouter as Router } from "react-router-dom";
import { clickLinkLanguage, randomQuestion, isGuessed, score, clickNextLevel, level, levelName, cleanDescQues } from './redux/store';

let rerenderET = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App state={state} clickNextLevel={clickNextLevel} clickLinkLanguage={clickLinkLanguage} randomQuestion={randomQuestion} isGuessed={isGuessed} score={score} level= {level} levelName={levelName} cleanDescQues={cleanDescQues} />
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderET(state);

subscribe(rerenderET);