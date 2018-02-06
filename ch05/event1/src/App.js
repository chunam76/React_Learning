import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num : 0
        }
        // 생성자 내부에서 bind를 미리 하고 아래와 같이 사용한다.
        this.add = this.add.bind(this);
    }
    // 버튼 클릭 이벤트 발생 시, setState를 통해 state의 num을 변경 => UI rerendering
    add() {
      this.setState({ num : this.state.num + 1 })
    }  
    subtract = ()=> {
      this.setState({ num : this.state.num - 1 })
    }
    render() {
        return (
        <div className="well">
            <span className="input-group-btn">
              <button type="button" className="btn btn-primary" 
                onClick={ this.subtract}>
                <span className="glyphicon glyphicon-minus"></span>
              </button>
              <button type="button" className="btn btn-primary" 
                // onClick= {this.add.bind(this)}>
                onClick={this.add}>
                <span className="glyphicon glyphicon-plus"></span>
              </button>
              <input type="text" className="form-control input-number" value={this.state.num} />
            </span>
        </div>
    );
    }
}

export default App;