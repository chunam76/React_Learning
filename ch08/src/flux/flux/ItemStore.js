import { Store } from 'flux/utils';
import AppDispatcher from './AppDispatcher';
import Constant from './Constant';
import update from 'immutability-helper';

// 상태 변수를 초기화 => 클래스의 외부에 있지만 다른 클래스에서 접근 불가
let itemName = '';
let items = [];

// flux 의 Store를 상속
class ItemStore extends Store {
    // 다른 클래스에서 읽기 위한 getter 제공
    getState() {
        return { 
            itemName : itemName,
            items : items 
        };
    }

    // Action에서 AppDispatcher.dispatch 호출 시 여기로 들어옴
    __onDispatch(action) {
        switch(action.type) {
            case Constant.ADD_ITEM :
                // 기존 items에 받은 데이터를 추가해줌.
                items = update(items, { $push : [ action.payload ] })
                // 데이터가 변경되었음을 알려준다.
                this.__emitChange();
                break;
            case Constant.DELETE_ITEM :
                // 기존 items에서 특정 아이템을 삭제한다.
                let index = items.findIndex(x=> x.id === action.payload.id);                
                // 데이터가 변경되었음을 알려준다.
                items = update(items, { $splice : [[ index,1 ]]})
                this.__emitChange();                
                break;
            case Constant.CHANGE_NAME :
                itemName = action.payload.itemName;
                this.__emitChange(); 
                break;
            default : 
                break;
        }
    }    
}

// 핵심 : ItemStore 객체를 생성 => AppDispatcher 가 호출되면 ItemStore로 들어오게 생성하여 넘김
export default new ItemStore(AppDispatcher);


