import App from './App';
import TodoActionCreator from '../redux/TodoActionCreator';
import { connect } from 'react-redux';

// react-redux의 connect 고차함수 생성하기
// 상태에 대한 맵핑(state)
const mapStateToProps = (state)=> {
    return {
        todolist : state.todolist
    }
}

// 액션에 대한 맵핑(dispatch)
const mapDispatchToProps = (dispatch)=> {
    return {
        addTodo : (todo) => dispatch(TodoActionCreator.addTodo(todo)),
        deleteTodo : (no) => dispatch(TodoActionCreator.deleteTodo(no)),
        toggleDone : (no) => dispatch(TodoActionCreator.toggleDone(no))
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

// 직접 AppContainer 를 만들었을때의 코드는 삭제
// 상태 보유, 액션 보유
// class AppContainer extends Component {
//     constructor() {
//         super()
//         this.state = {
//             todolist : [
//                 { no:1, todo:"React 학습", done:false },
//                 { no:2, todo:"Redux 학습", done:false },
//                 { no:3, todo:"Bootstrap 살펴보기", done:true }
//             ]
//         }
//         //this를 미리 바인딩함. 
//         //자식컴포넌트로 전달해도 this는 App 컴포넌트를 참조하게됨.
//         this.addTodo = this.addTodo.bind(this);
//         this.deleteTodo = this.deleteTodo.bind(this);
//         this.toggleDone = this.toggleDone.bind(this);
//     }

//     addTodo(todo) {
//         let newTodo = { no: new Date().getTime(), todo:todo, done:false };
//         const addedTodolist = update(this.state.todolist, 
//             { $push : [ newTodo ] }
//         )
//         this.setState({ todolist : addedTodolist })

//         // immer 플러그인 적용하여 불변성 확보
//         // let newTodo = { no: new Date().getTime(), todo:todo, done:false };
//         // const addedTodolist = produce(this.state.todolist, (todolist)=> {
//         //     todolist.push(newTodo);
//         // })

//         // this.setState({ todolist : addedTodolist })
//     }

//     deleteTodo(no) {
//         let index = this.state.todolist.findIndex((todo) => todo.no === no)
//         const deletedTodolist = update(this.state.todolist, 
//             { 
//                 $splice: [[ index, 1 ]] 
//             }
//         )
//         this.setState({ todolist : deletedTodolist })

//         // immer 플러그인 적용하여 불변성 확보
//         // let index = this.state.todolist.findIndex((todo) => todo.no === no)
//         // const deletedTodolist = produce(this.state.todolist, (todolist)=> {
//         //     todolist.splice(index,1);
//         // })
//         // this.setState({ todolist : deletedTodolist })
//     }

//     toggleDone(no) {
//         let index = this.state.todolist.findIndex((todo) => todo.no === no)
//         let changedDone = !this.state.todolist[index].done;
//         const updatedTodolist = update(this.state.todolist, {
//             [index] : {
//                 done : { $set : changedDone }
//             }
//         })
//         this.setState({ todolist : updatedTodolist })
                
//         // immer 플러그인 적용하여 불변성 확보
//         // let index = this.state.todolist.findIndex((todo) => todo.no === no)
//         // const updatedTodolist = produce(this.state.todolist, (todolist) => {
//         //     todolist[index].done = !todolist[index].done;
//         // })
//         // this.setState({ todolist : updatedTodolist })
//     }

//     render() {
//         let callbacks = {
//             addTodo : this.addTodo, deleteTodo : this.deleteTodo, toggleDone : this.toggleDone
//         }
//         return (
//             // <App 
//             //     todolist={this.state.todolist} 
//             //     addTodo={this.addTodo}
//             //     deleteTodo={this.deleteTodo} 
//             //     toggleDone={this.toggleDone} />
//             <App 
//                 todolist={this.state.todolist} {...callbacks} />
//         );
//     }
// }
export default AppContainer;