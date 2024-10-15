import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Make sure this path is correct
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);