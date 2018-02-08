import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// 1. React Router를 활용한 SAP 앱 개발
// import App from './routertest1/components/App';
// 2. React Router - Component로 속성 전달하기
// import App from './routertest2/components/App';
// 3. React Router - URL 파라미터를 이용하기
// Song 화면에서 곡리스트가 표시되고, 곡 클릭 시, Youtube가 Play 되게끔
// import App from './routertest3/components/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
