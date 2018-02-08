import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// 1. Flux 사용 예제
// import App from './flux/App';
// 2. Redux 사용 예제 - single Reducer 사용
// import AppContainer from './todolistapp1/components/AppContainer';
// import TodoStore from './todolistapp1/redux/TodoStore';
// 3. Reducx 사용 예제 - multi Reducer 사용
// import AppContainer from './todolistapp2/components/AppContainer';
// 4. Reducx 사용 예제 - Reducx Middleware 사용
import AppContainer from './todolistapp3/components/AppContainer';
import TodoStore from './todolistapp3/redux/TodoStore';
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