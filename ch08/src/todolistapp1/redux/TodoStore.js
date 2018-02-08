import { createStore } from 'redux';
import TodoReducer from './TodoReducer';

// Redux를 이용하여 Store 객체 생성
const TodoStore = createStore(TodoReducer);
export default TodoStore;