import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// import App from './flux/App';
// import AppContainer from './todolistapp1/components/AppContainer';
// import TodoStore from './todolistapp1/redux/TodoStore';
import AppContainer from './todolistapp2/components/AppContainer';
import TodoStore from './todolistapp2/redux/TodoStore';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// 기존 AppContainer 사용
// ReactDOM.render(<AppContainer />, document.getElementById('root'));
// Provider 를 이용하여 store 정보를 지정하고 한번 AppContainer를 한번 싸준다.
ReactDOM.render(
    <Provider store={TodoStore}>
        <AppContainer />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();