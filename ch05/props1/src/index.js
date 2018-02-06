import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Calc from './Calc';
import 'bootstrap/dist/css/bootstrap.css'

// let values = {x : 4, y : 10, oper : "+"}

// default 지정 시 동작
let values = {x : 4, y : 10}

// x가 숫자가 아닌 경우, 에러가 발생하지는 않는다. => 유효성이 필요
// let values = {x : "abc", y : 5, oper : "*"}
ReactDOM.render(<Calc {...values}/>, document.getElementById('root'));
