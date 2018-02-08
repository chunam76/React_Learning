import Constant from '../Constant';

const TimeActionCreator = {
    changeTime() {
        return {
            type: Constant.CHANGE_TIME
        }
    },
    // 비동기 함수
    asyncChangeTime() {
        //의도적 지연시간 1초
        return (dispatch, getState)=> {
            let { currentTime } = getState();            
            //Logger 미들웨어로 확인하기 위해 존재하지 않는 액션 타입 전송
            dispatch({ type:"change time start", prevTime:currentTime.toLocaleTimeString() })
            setTimeout(()=>{
                //1초 후에 changeTime 실행
                dispatch(this.changeTime());
            }, 1000)
        }
    }
}

export default TimeActionCreator;