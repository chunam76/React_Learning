import { combineReducers } from 'redux';
import TimeReducer from './TimeReducer';
import TodoReducer from './TodoReducer';

// RootReducer 에서 TimeReducer과 TodoReducer를 결합하여 부모 Reducer를 만든다.
const RootReducer = combineReducers(
    {
        currentTime : TimeReducer, todolist: TodoReducer 
    })

export default RootReducer;