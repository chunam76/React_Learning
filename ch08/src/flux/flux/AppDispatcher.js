import { Dispatcher } from 'flux';

// 객체를 만들어서 리턴해준다. => 단일 객체
// export default new Dispatcher();

// Dispatcher 만 바라보면 어떤 이벤트와 state 등 알 수 있다.
// 예제) 간단한 로깅 기능 추가
import Constant from './Constant';
class AppDispatcher extends Dispatcher {
    dispatch(action) {
        super.dispatch(action);
        // 액션의 유형이 수정일 경우만 type과 payload를 출력한다.
        if (action.type !== Constant.CHANGE_NAME) {
            console.log(`## dispatch : ${action.type}, ${JSON.stringify(action.payload)}`)
        }
    }
}

export default new AppDispatcher();