import React, { Component } from 'react';
import Header from './Header'
import Main from './Main'

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                {/* Main 컴포넌트 추가 */}
                <Main />
            </div>
        );
    }
}

export default App;