import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './init/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Routes } from './Routes';
import 'emoji-mart/css/emoji-mart.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <Router>
        <Switch>
          <Routes/>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

