import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// 1. React Router를 활용한 SAP 앱 개발
// import App from './routertest1/components/App';
// 2. React Router - Component로 속성 전달하기
// import App from './routertest2/components/App';
// 3. React Router - URL 파라미터를 이용하기
// Song 화면에서 곡리스트가 표시되고, 곡 클릭 시, Youtube가 Play 되게끔
// import App from './routertest3/components/App';
// 4. React Router - Router 객체 속성
// 속성 중 history를 이용하여 다른 경로로 이동하기
// import App from './routertest4/components/App';
// 4. React Router - Router 컴포넌트
// Switch, Redirect 컴포넌트
// import App from './routertest5/components/App';
// 5. React Router - Router Config
import App from './routerconfigtest/components/App';

import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// App을 BrowserRouter 로 감싸준다.
ReactDOM.render((<Router><App /></Router>), document.getElementById('root'))
registerServiceWorker();
