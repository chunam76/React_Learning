import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import App from './portal/App';
// import AppContainer from './todolist/components/AppContainer';
import App from './perftest/App';
import './index.css';
import registerObserver from 'react-perf-devtool'
import registerServiceWorker from './registerServiceWorker';

registerObserver();
ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
