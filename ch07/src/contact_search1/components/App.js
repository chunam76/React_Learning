import React, { Component } from 'react';
import axios from 'axios'; // axio 등록, 네트워크 통신
import InputName from './InputName';
import ContactList from './ContactList';
import Loading from './Loading';
import { Portal } from 'react-portal'; // react-portal 등록, 로딩팝업을 보여주기 위한 

//const BASEURL = "http://localhost:3001";
const BASEURL = "http://sample.bmaster.kro.kr";

class App extends Component {
    constructor(props) {
        super(props)
        // 1. state 초기화
        this.state = { 
            contacts : [], isLoading: false, name:''
        };
        // 2. this를 bind 함수 지정 => this가 App 컴포넌트가 되도록
        this.searchContact = this.searchContact.bind(this);
        this.changeName = this.changeName.bind(this);
    }

    changeName(name){
        this.setState({ name: name })
    }

    searchContact() {
        let { name } = this.state;
        // 입력된 문자가 2자 이상일 경우만 조회
        if (name.trim().length >= 2) {
            // 조회 시, 로딩바 표시
            this.setState({ isLoading: true });
            // 통신 요청
            axios.get(BASEURL + '/contacts_long/search/' + name)
            .then((response)=> {
                // 수신 후, 로딩바 사라짐
                this.setState({ isLoading: false });
                // 성공할 경우 contacts에 응답한 데이터를 넣어줌.
                this.setState({ contacts : response.data });
            })
            .catch((error)=> {
                // 수신 후, 로딩바 사라짐
                this.setState({ isLoading: false })
                console.log("### error : ", error);
            })
        // 입력된 문자가 1자 이하일 경우는 초기화
        } else {
            this.setState({ contacts : [] })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="well">
                    <div className="col-xs-1"></div>
                    <div className="title col-xs-10">:: 연락처 앱</div>
                    <div className="col-xs-1"></div>
                    <div className="clearfix"></div>
                </div>
                <div className="panel panel-default panel-borderless">
                    <div className="panel-body">
                        <InputName searchContact={this.searchContact} name={this.state.name}
                            changeName={this.changeName}/>
                    </div>
                </div>
                { /* contacts의 상태 변경 시, ContactList 컴포넌트의 UI가 변경됨  */ }
                <ContactList contacts={this.state.contacts} 
                    deleteContact={this.deleteContact} />
                { /* isLoading 상태 변경 시 Loading 컴포넌트의 UI가 Poratal 에 변경됨  */ }                    
                <Portal node={document && document.getElementById('modal-area')}>
                    <Loading isLoading={this.state.isLoading}>
                        <div className="well title">
                            { /* "데이터 조회중" 메세지도 state에 정의하여 동적으로 변경할 수 있음  */ }  
                            <h4>데이터 조회중</h4>
                        </div>
                    </Loading>    
                </Portal>
            </div>
        );
    }
}

export default App;