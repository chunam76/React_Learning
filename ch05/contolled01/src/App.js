import React, { Component } from 'react'

// 제어 컴포넌트
class App extends Component {
  constructor() {
    super()
    this.state = { x:0, y:0 };
  }
  change(e) {
    let newValue = parseInt(e.target.value);
    if (isNaN(newValue)) newValue = 0;
    
    if (e.target.id == "x")
      this.setState({ x: newValue })
    else 
      this.setState({ y: newValue })
  }
  render() {
    return (
      // UI 상에서 아무리 입력해도 변경되지 않는다.
      // <div>
      //   X : <input type="text" value={this.state.x}/><br />
      //   Y : <input type="text" value={this.state.y}/><br />
      //   결과 : <span>{this.state.x + this.state.y}</span>
      // </div>

      // 이벤트를 통해 setState를 호출하여 UI를 변경한다. => 단방향 데이타 바인딩
      <div className="container">
        X : <input id="x" type="text" value={this.state.x} onChange={this.change.bind(this)}/><br />
        Y : <input id="y" type="text" value={this.state.y} onChange={this.change.bind(this)}/><br />
        결과 : <span>{this.state.x + this.state.y}</span>
      </div>
    )
  }
}

export default App;