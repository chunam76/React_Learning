import React, { Component } from 'react';
import Child from './Child';
import AppContext from './AppContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { childMsg : "자식!", grandChildMsg:"손주", greatGrandChildMsg:"증손주" };
  }
  
  render() {
    return (
      <AppContext.Provider value={this.state}>
        <div className="box">
          <h1>App 컴포넌트</h1>
          <Child />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
