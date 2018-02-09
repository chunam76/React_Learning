import React, { Component } from 'react';
// Redirect, Switch 추가
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Header from './Header';

import Home from './Home';
import About from './About';
import SongList from './SongList';
import Members from './Members';
// NotFound 추가
import NotFound from './NotFound';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            members : [
                { name: 'Maggie Adams', photo: 'photos/Mag.png' },
                { name: 'Sammie Purcell', photo: 'photos/Sam.png' },
                { name: 'Tim Purcell', photo: 'photos/Tim.png' },
                { name: 'Scott King', photo: 'photos/King.png' },
                { name: 'Johnny Pike', photo: 'photos/JPike.jpg' },
                { name: 'Toby Ruckert', photo: 'photos/Toby.jpg' },
            ],
            songs : [
                { id:1, title:"Fallin' for you", musician:'Colbie callet', youtube_link:'PABUl_EX_hw' },
                { id:2, title:"Can't hurry love", musician:'The supremes', youtube_link:'EJDPhjQft04' },
                { id:3, title:"Landslide", musician:'Dixie chicks', youtube_link:'V2N7gYom9-A' },
                { id:4, title:"Can't let go", musician:'Linda ronstadt', youtube_link:'P-EpGKXmoe4' },
                { id:5, title:"Doctor my eyes", musician:'Jackson Browne', youtube_link:'7JlFKS_1oZk' },
                { id:6, title:"We gotta get you a woman", musician:'Todd Rundgren', youtube_link:'EyUjbBViAGE' },
                { id:7, title:"Hip to my heart", musician:'Band Perry', youtube_link:'vpLCFnD9LFo' },
                { id:8, title:"Rolling in the deep", musician:'Adele', youtube_link:'EvK8pDK6IQU' }
            ]
        }
    }

    render() {
        return (
            <Router>
                <div className="container">
                    <Header />
                    {/* Switch 컴포넌트 - 일치하는 Router가 있으면 그것만 실행 switch case 문과 동일하다. */}
                    <Switch>
                        {/* Home Router 컴포넌트의 path를 /home 으로 지정 */}
                        <Route path="/home" component={Home} />
                        <Route path="/about" render={ (props) => 
                            <About {...props} title="여우와 늙은이들" />
                        } />
                        <Route path="/members" render={(props)=> 
                            <Members {...props} members={this.state.members} />
                        } />
                        <Route path="/songs" render={(props)=> 
                            <SongList {...props} songs={this.state.songs} />
                        } />
                        {/* Redirect 컴포넌트 - from 과 일치하는 URL은 to 로 자동으로 이동한다. */}
                        <Redirect exact from="/" to="/home"/>
                        {/* Switch 컴포넌트의 제일 마지막의 Route 컴포넌트는 switch문의 default가 된다. */}
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;