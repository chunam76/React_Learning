import React, { Component } from 'react';
import Loading from './Loading';
import { Portal } from 'react-portal';
import { renderRoutes } from 'react-router-config';
import routes from '../routes';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
    render() {
        // <Router> 추가
        // renderRoutes 추가 : 현재 보여지는 URL 정보를 바탕으로 Route 정보 표시
        return (
            <Router>
            <div className="container">
                {renderRoutes(routes)}
                <Portal node={document && document.getElementById('modal-area')}>
                    <Loading>
                        <div className="well title"><h4>데이터 처리중</h4></div>
                    </Loading>    
                </Portal>
            </div>
            </Router>
        );
    }
}

export default App;
