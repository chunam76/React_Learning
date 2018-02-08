import { createStore } from 'redux';
// import TodoReducer from './TodoReducer';
import RootReducer from './RootReducer';

// const TodoStore = createStore(TodoReducer);
// 부모 Reducer인 RootReducer로 지정
const TodoStore = createStore(RootReducer);

export default TodoStore;