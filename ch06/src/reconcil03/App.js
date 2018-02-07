import React, { Component } from 'react';
import update from 'immutability-helper';
import MyButton from './MyButton';
import List from './List';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemlist : [ ]
        }
        // MyButton 에 this.addItem.bind(this) 을 할때마다 새로운 this가 지정되므로 contructor에 지정
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
                    <MyButton addItem={this.addItem} />
                    <MyButton addItem={this.addItem.bind(this)} />
                    <List itemlist={this.state.itemlist} />
                </div>
            </div>
        );
    }
}

export default App;