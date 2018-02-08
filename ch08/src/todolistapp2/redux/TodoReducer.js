import Constant from '../Constant';
// import update from 'immutability-helper';
// 불변성 확보를 위해 immer 라이브러리로 사용
import produce from 'immer';

// 초기에 주어질 상태 => 최초에 화면에 보여짐
const initialState = {
    todolist : [
        { no:1, todo:"이집트 여행", done:false },
        { no:2, todo:"나미비아 여행", done:true },
        { no:3, todo:"쿠바 여행", done:false }
    ]
}

// 순수함수
// 이제는 state는 todolist만 받게 된다.
// const TodoReducer = (state=initialState, action) => {
const TodoReducer = (todolist=initialState.todolist, action) => {
    let index, newTodo, newTodolist;
    switch(action.type) {
        case Constant.ADD_TODO:
            newTodo = { no: new Date().getTime(), todo:action.payload.todo, done:false };
            // newTodolist = produce(state.todolist, (currentTodoList)=>{
            //     currentTodoList.push(newTodolist)
            // });
            // todolist를 바로 받게 된다.
            newTodolist = produce(todolist, (currentTodoList)=>{
                currentTodoList.push(newTodo)
            });
            // return { todolist: newTodolist };            
            // 새로운 todolist를 리턴한다.
            return newTodolist;
        case Constant.DELETE_TODO:
            index = todolist.findIndex((todo) => todo.no === action.payload.no)
            newTodolist = produce(todolist, (currentTodoList)=>{
                currentTodoList.splice(index, 1)
            });
            return newTodolist;
        case Constant.TOGGLE_DONE:
            index = todolist.findIndex((todo) => todo.no === action.payload.no)
            newTodolist = produce(todolist, (currentTodoList)=>{
                currentTodoList[index].done = !currentTodoList[index].done;
            });
            return newTodolist;
        default:
            return todolist;
    }
}

export default TodoReducer;