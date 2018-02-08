import React, { Component } from 'react';
// react-router-dom 에서 제공하는 BrowserRouter 가져와서 이름을 Router로 한다.
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';

import Home from './Home';
import About from './About';
import SongList from './SongList';
import Members from './Members';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Header />
                    {/*path 이름이 URL 경로에 매칭될때 해당 component가 나타난다.*/}
                    {/*
                        exact 의미 = URL이 정확하게 일치할 때만 동작해라
                        exact가 없으면, 지나간 경로의 페이지가 표시된다.
                        http://~~/about 일 경우, 
                        http://~~ (home)도 화면에 표시되고, http://~~/about(About) 도 화면에 표시된다.
                    */}
                    <Route  path="/" component={Home} />
                    <Route path="/about" component={About}/>
                    <Route path="/members" component={Members} />
                    <Route path="/songs" component={SongList} />
                </div>
            </Router>
        );
    }
}

export default App;