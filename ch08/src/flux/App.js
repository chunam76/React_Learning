import React, { Component } from 'react';
import { Container } from 'flux/utils';
import ItemStore from './flux/ItemStore';
import ItemAction from './flux/ItemAction';

class App extends Component {
    // Action => Dispatcher => Store => View
    constructor(props) {
        super(props);

        // View에서 일어나는 Action
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.changeItemName = this.changeItemName.bind(this);
    }
    changeItemName(e) {
        this.setState({itemName : e.target.value})
        ItemAction.changeName(e.target.value);
    }
    addItem() {
        ItemAction.addItem(this.state.itemName);
        this.setState({ itemName:'' })
    }
    deleteItem(id) {
        ItemAction.deleteItem(id);
    }

    render() {
        let styles = { color:"blue", cursor:"pointer", fontSize:"9pt" }
        let itemlist = this.state.items.map((item)=>{
            return (
                <li key={item.id}>
                    {item.itemName}{' '}
                    <span style={styles} onClick={ () => { this.deleteItem(item.id)} }>삭제</span>
                </li>
            )
        })

        return (
        <div>
            <h3>올드팝 목록</h3>
            <div>
            <input type="text" value={this.state.itemName} onChange={this.changeItemName} />
            <button onClick={this.addItem}>추 가</button>
            </div>
            <ul>
                {itemlist}
            </ul>
        </div>
        )
    }

}

// AppComponent : [ItemStore] => 멀티 Stroe 가능하게 배열로 지정함.
App.getStores = ()=>([ ItemStore ]);
// App의 state를 얻어올 수 있음.
App.calculateState = (prevState)=> { return ItemStore.getState() }
// Flux의 Container.create(App)을 이용하여 상태를 관리하는 AppContainer가 
// 만들어짐 => AppContainer가 App에 props를 자동으로 주입함.
const AppContainer = Container.create(App);

export default AppContainer;