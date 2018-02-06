// 클래스 Component, 단축키 rss
import React, { Component } from 'react';
// import Hello from './Hello'
import CountryList from './CountryList';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg : "World!!",            
            list : [
                { no:1, country:'이집트', visited:false },
                { no:2, country:'일본',  visited:true },
                { no:3, country:'피지', visited:false },
                { no:4, country:'콜롬비아', visited:false }
            ]
        }
    }
    createString(x, y) {
        return (<div class="well">{x} + {y} = {x + y} </div>);
    }
    render() {
        // let msg="World!!"; // 보간법 => render 내부에 변수를 하나 두어서 출력
        // let data = {msg:"두번째 숙제하자"}
        // let list = [
        //     { no:1, country:'이집트', visited:false },
        //     { no:2, country:'일본',  visited:true },
        //     { no:3, country:'피지', visited:false },
        //     { no:4, country:'콜롬비아', visited:false }
        // ];
        // return (
        //     <div class="container">
        //         <h1>Hello World!! {msg}</h1>
        //         <hr class="dash-style"/>
        //         {this.createString(1, 2)}
        //         <Hello msg="첫번째 숙제하자~~" />
        //         <Hello msg={data.msg} />
        //         <CountryList countries ={list}/>
        //     </div>
        // );

        // 상태 및 초기화한 state 속성을 이용하여 Render
        return (
            <div className="container">
                <h1>Hello {this.state.msg}</h1>
                <hr className="dash-style" />
                {this.createString(4,5)}
                <CountryList countries={this.state.list} />
            </div>
        );
    }
}
export default App;