import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App'; // Ensure you import correctly

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Make sure 'root' matches your HTML file
);
