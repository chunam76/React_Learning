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
// import AppContainer from './todolistapp3/components/AppContainer';
// import TodoStore from './todolistapp3/redux/TodoStore';
// 5. Reducx 사용 예제 - Reducx Thunk 사용하여 비동기 처리
// import AppContainer from './todolistapp4/components/AppContainer';
// import TodoStore from './todolistapp4/redux/TodoStore';
// 6. Reducx 사용를 사용한 앱 개발 - 연락처 관리 앱
import AppContainer from './contact_search/components/AppContainer';
import ContactStore from './contact_search/store/ContactStore';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// 기존 AppContainer 사용
// ReactDOM.render(<AppContainer />, document.getElementById('root'));
// Provider 를 이용하여 store 정보를 지정하고 한번 AppContainer를 한번 싸준다.
ReactDOM.render(
    <Provider store={ContactStore}>
        <AppContainer />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();