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
const TodoReducer = (state=initialState, action) => {
    let index, newTodo, newTodolist;
    switch(action.type) {
        case Constant.ADD_TODO:
            newTodo = { no: new Date().getTime(), todo:action.payload.todo, done:false };
            // immer 라이브러리 사용하여 불변성 확보
            // 새로운 state = product(기존 state, (새로운 state)=> {처리코드})
            newTodolist = produce(state.todolist, (currentTodoList)=>{
                currentTodoList.push(newTodo)
            });
            // newTodolist = update(state.todolist, 
            //     { $push : [ newTodo ] }
            // )
            return { todolist: newTodolist };
        case Constant.DELETE_TODO:
            index = state.todolist.findIndex((todo) => todo.no === action.payload.no)
            newTodolist = produce(state.todolist, (currentTodoList)=>{
                currentTodoList.splice(index, 1)
            });
            // newTodolist = update(state.todolist, 
            //     { 
            //         $splice: [[ index, 1 ]] 
            //     }
            // )
            return { todolist: newTodolist };
        case Constant.TOGGLE_DONE:
            index = state.todolist.findIndex((todo) => todo.no === action.payload.no)
            newTodolist = produce(state.todolist, (currentTodoList)=>{
                currentTodoList[index].done = !currentTodoList[index].done;
            });
            // changedDone = !state.todolist[index].done;
            // newTodolist = update(state.todolist, {
            //     [index] : {
            //         done : { $set : changedDone }
            //     }
            // })
            return { todolist: newTodolist };
        default:
            return state;
    }
}

export default TodoReducer;