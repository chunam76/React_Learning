import Constant from '../Constant';

// 메소드(액션)를 보유(생성)한 객체
// 액션정의 : Type과 데이타
const TodoActionCreator = {    
    addTodo(todo) {
        // return 하는 순간 dispacher
        return {
            type: Constant.ADD_TODO, payload: { todo: todo }
        }
    },
    deleteTodo(no) {
        return {
            type: Constant.DELETE_TODO, payload: { no: no }
        }
    },
    toggleDone(no) {
        return {
            type: Constant.TOGGLE_DONE, payload : { no: no }
        }
    }
}

export default TodoActionCreator;