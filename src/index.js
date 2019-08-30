import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
// import { positions, Provider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";

// import reducer from './store/reducer';
import signupReducer from './store/reducers/signup';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

//To connect redux with react app we need to wrap our root comp inside Provider
import { Provider } from 'react-redux'; 

// const options = {
//   // you can also just use 'bottom center'
//   position: positions.BOTTOM_CENTER,
//   timeout: 5000
// }

//Request interceptor
axios.interceptors.request.use(request => {
  console.log('Full Filled Request: ', request);
  return request;
}, error => {
  console.log('Rejected request error: ', error);
  return Promise.reject(error);
});

//Response Interceptor
axios.interceptors.response.use(response => {
  console.log('Full Filled Response: ', response);
  return response;
}, error => {
  console.log('Rejected response error: ', error);
  return Promise.reject(error);
});

//Setting default config
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

const store = createStore(signupReducer);

const RootApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  <RootApp />,
  document.getElementById('root')
);
