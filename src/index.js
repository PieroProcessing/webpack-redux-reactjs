import './assets/styles/common.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import redux from './redux/store';

import App from './app';
import(/* webpackChunkName: "antd.css" */'!style-loader!css-loader!antd/dist/antd.min.css');


const { store, persistor } = redux();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider >,
  document.getElementById('root')
);