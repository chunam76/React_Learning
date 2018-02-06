import React, { Component } from 'react';
import update from 'immutability-helper';
import MyButton from './MyButton';
import List from './List';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList : []
        };
        this.addItem = this.addItem.bind(this);
    }

    addItem(){
        if(!this.num) this.num = 0;
        this.num ++;
        let newItemList = update(this.state.itemList, {
            $push:[{no:new Date().getItem(), item:"아이템 " + this.num}]
        })
        this.setState({itemList:newItemList});
    }
    
    render() {
        return (
            <div className="container">
                <div className="well">
                    <MyButton addItem={this.addItem} />
                    <List itemlist={this.state.itemlist} />
                </div>
            </div>
        );
    }
}

export default App;