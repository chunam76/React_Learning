import { createStore, applyMiddleware } from 'redux';
import RootReducer from './RootReducer';
// Redux thunk 사용을 위한 redux-thunk 추가
import reduxThunk from 'redux-thunk';

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

// 비동기 처리를 위한 reduxThunk 추가
const TodoStore = createStore(RootReducer, applyMiddleware(logger,reduxThunk));
export default TodoStore;