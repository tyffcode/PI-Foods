import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

axios.defaults.baseURL = "http://localhost:3001";
//axios.defaults.baseURL = "https://pi-food-main-production-9462.up.railway.app/";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);