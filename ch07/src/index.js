import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './axiostest2/App';
import registerServiceWorker from './registerServiceWorker';
import es6Promise from 'es6-promise'

es6Promise.polyfill();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
