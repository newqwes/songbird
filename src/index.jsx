import store from "./redux/store";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import { BrowserRouter as Router } from "react-router-dom";

let rerenderET = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App state={state} dispatch={store.dispatch.bind(store)} clickNextLevel={store.clickNextLevel.bind(store)} clickLinkLanguage={store.clickLinkLanguage.bind(store)}/>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderET(store.getState());

store.subscribe(rerenderET);