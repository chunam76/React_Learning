import { createStore, applyMiddleware } from 'redux';
import RootReducer from './RootReducer';

// Redux 미들웨어 만들기 => 간단한 로깅 기능 추가
const logger = (store) => {
    // 반드시 next를 호출해준다.
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

// const TodoStore = createStore(RootReducer);
// applyMiddleware를 이용하여 logger 미들웨어 추가
const TodoStore = createStore(RootReducer, applyMiddleware(logger));
export default TodoStore;