import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import { BrowserRouter as Router } from "react-router-dom";
import { clickLinkLanguage } from './redux/store';

let rerenderET = (stateTrener) => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App stateTrener={stateTrener} clickLinkLanguage={clickLinkLanguage}/>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
export default rerenderET;