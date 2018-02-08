import React, { Component } from 'react';
// Link 컴포넌트 추가 : to 속성에 동적으로 값을 추가할 수 있는 기능 제공
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="panel">
                <div className="panel-heading">
                    <h2 className="text-center">Foxes And Fossils</h2>
                    <p><a href="http://foxesandfossils.com">http://foxesandfossils.com</a></p>
                    <div className="row">
                    <div className="col-xs-12">
                        <Link className="btn btn-success menu" to="/">Home</Link>
                        <Link className="btn btn-success menu" to="/about">About</Link>
                        <Link className="btn btn-success menu" to="/members">Members</Link>
                        <Link className="btn btn-success menu" to="/songs">Songs</Link>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;    