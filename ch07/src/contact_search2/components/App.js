import React, { Component } from 'react';
import axios from 'axios';

import InputName from './InputName';
import ContactList from './ContactList';
import AddContact from './AddContact';
import Loading from './Loading';
import { Portal } from 'react-portal';

//const BASEURL = "http://localhost:3001";
const BASEURL = "http://sample.bmaster.kro.kr";

class App extends Component {
    constructor(props) {
        super(props)
        // 1. state 초기화
        // showAddContact 상태 추가
        this.state = { 
            contacts : [], isLoading: false, name:'', showAddContact: false
        };
        // 2. this를 bind 함수 지정 => this가 App 컴포넌트가 되도록
        // deleteContact, changeName, changeShowAddContact 추가
        this.searchContact = this.searchContact.bind(this);
        this.addContact = this.addContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeShowAddContact = this.changeShowAddContact.bind(this);
    }

    changeShowAddContact(state) {
        this.setState({ showAddContact : state })
    }

    changeName(name){
        this.setState({ name: name })
    }

    searchContact() {
        let { name } = this.state;
        if (name.length >= 2) {
            this.setState({ isLoading: true })

            axios.get(BASEURL + '/contacts_long/search/' + name)
            .then((response)=> {
                this.setState({ isLoading: false })
                this.setState({ contacts : response.data });
            })
            .catch((error)=> {
                this.setState({ isLoading: false })
                console.log("### error : ", error)
            })
        } else {
            this.setState({ contacts : [] })
        }
    }

    addContact(name, tel, address) {
        // 연락처 추가 후 추가한 연락처 조회를 위해 name 상태 변경
        this.setState({name:name})
        this.changeShowAddContact(true);
        axios.post(BASEURL + '/contacts', 
            {name:name, tel:tel, address:address }
        )
        .then((response)=>{
            if (response.data.status === 'success') {
                this.searchContact(name);       //성공 이후 순차적으로 추가한 연락처 조회
            }
            this.changeShowAddContact(false);
        })
    }

    deleteContact(no) {
        //삭제 후 현재 검색어로 조회
        axios.delete(BASEURL+'/contacts/'+no)
        .then((response)=> {
            this.searchContact(this.state.name)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="well">
                    <div className="col-xs-1"></div>
                    <div className="title col-xs-10">:: 연락처 앱</div>
                    {/* 신규 연락처를 추가하기 위한 버튼 삽입*/}
                    <div className="col-xs-1">
                        <button className="btn btn-warning btn-circle" onClick={()=>this.changeShowAddContact(true)}>
                            <span className="glyphicon glyphicon-plus"></span>
                        </button>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="panel panel-default panel-borderless">
                    <div className="panel-body">
                        <InputName searchContact={this.searchContact} name={this.state.name}
                            changeName={this.changeName}/>
                    </div>
                </div>
                <ContactList contacts={this.state.contacts} 
                    deleteContact={this.deleteContact} />
                {/* showAddContact 가 true일때만 AddContact 컴포넌트를 보여줌*/}
                { 
                    this.state.showAddContact 
                        ? <AddContact addContact={this.addContact} 
                            changeShowAddContact={this.changeShowAddContact} /> 
                        : '' 
                }
                <Portal node={document && document.getElementById('modal-area')}>
                    <Loading isLoading={this.state.isLoading}>
                        <div className="well title">
                            <h4>데이터 조회중</h4>
                        </div>
                    </Loading>    
                </Portal>
            </div>
        );
    }
}

export default App;