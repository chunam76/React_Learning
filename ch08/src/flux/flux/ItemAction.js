import Constant from './Constant';
import AppDispatcher from './AppDispatcher';

// Action 객체 정의 - 아이템 변경, 아이템 추가, 아이템 삭제
const ItemActions = {
    addItem(itemName) {
        if (itemName.length > 2) {
            let id = new Date().getTime();
            // Dispatcher를 호출할때 type과 payload(데이터)를 전달함
            AppDispatcher.dispatch({
                type : Constant.ADD_ITEM,
                payload : { id: id, itemName: itemName }
            })    
        }
        // 네트워크 API가 필요하다면 여기서 작성
    },
    deleteItem(id) {
        // Dispatcher를 호출할때 type과 payload(데이터)를 전달함
        AppDispatcher.dispatch({
            type : Constant.DELETE_ITEM,
            payload : { id: id }
        })
        // 네트워크 API가 필요하다면 여기서 작성
    },
    changeName(itemName) {
        // Dispatcher를 호출할때 type과 payload(데이터)를 전달함
        AppDispatcher.dispatch({
            type : Constant.CHANGE_NAME,
            payload : { itemName : itemName }
        })
        // 네트워크 API가 필요하다면 여기서 작성
    }
} 

export default ItemActions;