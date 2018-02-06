import React, { Component } from 'react';

// 비제어 컴포넌트
class App extends Component {
    constructor() {
        super()
        this.state = { x:0, y:0, result:0 };
    }
    
    add() {
        // 실제 리얼DOM에 있는 this.elemX, this.elemY 를 가져와 계산함
        let x = parseInt(this.elemX.value, 10);
        let y = parseInt(this.elemY.value, 10);
        if (isNaN(x)) x = 0;
        if (isNaN(y)) y = 0;
        this.setState({ x:x, y:y, result:x+y });
    }

    render() {
        return (
            <div className="container">
                X : <input id="x" type="text" defaultValue={this.state.x}
                // ref 실제 리얼DOM에 this.elemX 에 값을 지정함. onChange가 없음. 
                    ref={(input) => { this.elemX = input; }} /><br />
                Y : <input id="y" type="text" defaultValue={this.state.y}
                // ref 실제 리얼DOM에 this.elemY 에 값을 지정함. onChange가 없음.
                    ref={(input) => { this.elemY = input; }} /><br />
                <button onClick={this.add.bind(this)}>덧셈 계산</button><br/>
                결과 : <span>{this.state.result}</span>
            </div>
        )
    }
}

export default App;