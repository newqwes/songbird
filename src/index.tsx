import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss'
import { Container } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
    <Container maxWidth="lg">
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);
