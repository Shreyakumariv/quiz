import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import { Store } from './Component/Redux/Store';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store} >
    <App />
  </Provider>
);
reportWebVitals();
