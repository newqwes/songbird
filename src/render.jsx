import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import { BrowserRouter as Router } from "react-router-dom";
import { clickLinkLanguage, randomQuestion, isGuessed, score, clickNextLevel, level, levelName } from './redux/store';

let rerenderET = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App stateTrener={state} clickNextLevel={clickNextLevel} clickLinkLanguage={clickLinkLanguage} randomQuestion={randomQuestion} isGuessed={isGuessed} score={score} level= {level} levelName={levelName} />
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
export default rerenderET;