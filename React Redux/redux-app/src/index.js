import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import MainReducer from './reduces/MainReducer'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css'
import reportWebVitals from './reportWebVitals';

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(MainReducer)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
