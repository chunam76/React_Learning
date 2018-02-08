import { createStore, applyMiddleware } from 'redux';
import RootReducer from './RootReducer';
import reduxThunk from 'redux-thunk';

// React Dev Tools 사용 추가
import TimeActionCreator from './TimeActionCreator'
import TodoActionCreator from './TodoActionCreator'
import { composeWithDevTools } from 'redux-devtools-extension';
import invariant from 'redux-immutable-state-invariant';
import _ from 'lodash';

const logger = (store) => {
    return (next) => {
        return (action) => {
            if (typeof(action) !== 'undefined') {
                console.log("### action 실행 : ", 
                    new Date().toLocaleTimeString(), JSON.stringify(action))
            }
            return next(action);
        }
    }
}

// React Dev Tools 사용 추가
// 개발자 코드이기 때문에 개발 시에만 해당 코드가 적용되도록 조치 필요~~!! 
// process.env.NODE_ENV = "development" or "production"
let TodoStore;
if(process.env.NODE_ENV === "development") {
    // extend 을 이용하여 TimeActionCreator 객체와 TodoActionCreator 객체를 병합
    const composeEnhancers = composeWithDevTools(_.extend(TimeActionCreator, TodoActionCreator));
    TodoStore = createStore(RootReducer, composeEnhancers(
        applyMiddleware(invariant(), reduxThunk)
    ));
} else {
    TodoStore = createStore(RootReducer, applyMiddleware(logger,reduxThunk));
}


export default TodoStore;