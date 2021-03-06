import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './contact_search2/components/App';
// import App from './contact_search1/components/App';
// import App from './axiostest2/App';
import registerServiceWorker from './registerServiceWorker';
import es6Promise from 'es6-promise'

es6Promise.polyfill();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
