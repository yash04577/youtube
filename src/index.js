import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import {Context} from "./context/context"
import State from './context/State';

const root = ReactDOM.createRoot(document.getElementById('root'));

let value = "yahoooo"

root.render(
 
  <State>
    <App />
  </State>
  
);

