import React, { Component } from 'react';
import update from 'immutability-helper';
import MyButton from './MyButton';
import List from './List';

class App extends Component {
    // 고차 컴포넌트를 이용하여 공통 기능 추가
    // console에 로깅하는 기능 추가
    // 컨포넌트가 마운될때의 render() 시간 측정
    // 컴포넌가 업데이트 될때의 render() 시간 측정
    constructor(props) {
        super(props)
        this.state = {
            itemlist : [ ]
        }
        this.addItem = this.addItem.bind(this);
    }

    addItem() {
        if (!this.num) this.num = 0;
        this.num++;
        let newItemList = update(this.state.itemlist, {
            $push : [ { no:new Date().getTime(), item: "아이템 "+this.num  } ]
        })
        this.setState({ itemlist : newItemList });
    }

    render() {
        return (
            <div className="container">
                <div className="well">
                    <MyButton addItem={this.addItem}/>
                    <List itemlist={this.state.itemlist} isLog="true"/>
                </div>
            </div>
        );
    }
}

export default App;