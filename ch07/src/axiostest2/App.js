import React, { Component } from 'react'
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactLists : {pageno:0, pagesize:0, contacts:[]}
        }
    }
    
    componentDidMount() {
        // 연락처 조회
        // axios.get('/contacts', {params:{pageno:1, pagesize:5}})
        // // => 화살표 함수는 this를 바로 사용할 수 있기 때문에
        // .then((response)=>{
        //     // this.setState(contactList : response.data)
        //     console.log(response)
        // })

        //연락처를 추가
        // axios.post('/contacts', {
        //      name:"멀티캠퍼스", tel:"010-2221-4545", address:"서울시 영등포구" 
        //     }).then((response) => {
        //         console.log(response); 
        //     }).catch((ex)=> {
        //          console.log("ERROR!!!! : ", ex); 
        //     })

        // 연락처 추가 이후에 순차적으로 조회
        axios.post('/contacts', {
            a:1 
        })
        .then((response) => {
            if (response.data.status !== "success") {
                throw new Error("데이터 추가 실패!!");
            }
            return axios.get('/contacts/'+ response.data.no);
        })
        .then((response)=>{
            console.log("## 새로운 연락처 추가 후 조회")
            console.log(response.data)
        })
        .catch((error) => {
            console.log("## 오류 발생 : ", error)
        })
    }
    render() {
        return (
            <div>
                <h2>Console을 확인합니다</h2>
            </div>
        )
    }
}

export default App;