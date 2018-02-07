import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import App from './portal/App';
import AppContainer from './todolist/components/AppContainer';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
