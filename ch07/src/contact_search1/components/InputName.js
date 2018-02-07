import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputName extends Component {
    constructor(props) {
        super(props);
        // this를 bind 함수 지정 => this가 InputName 컴포넌트가 되도록
        this.changeName = this.changeName.bind(this);
    }

    changeName(e){
        // input 으로 들어온 changeName 이벤트와 값을 부모 App 컴포넌트의 changeName 으로 전달
        this.props.changeName(e.target.value)
    }

    render() {
        return (
            <div className="row">
            <div className="col">
                <div className="input-group">
                    <input id="name" type="text" className="form-control" name="name" 
                        placeholder="Type name and Enter! " value={this.props.name}
                        onChange={this.changeName} />
                    { /* onClick 이벤트 발생 시, 부모 App 컴포넌트의 searchContact를 호출 */ }
                    <span className="btn btn-primary input-group-addon" onClick={this.props.searchContact}>검{'  '}색</span>
                </div>
            </div>
            </div>
        );
    }
}

// propTypes 으로 유효성 및 타입 지정
InputName.propTypes = {
    searchContact: PropTypes.func.isRequired,
    changeName: PropTypes.func.isRequired,
    name : PropTypes.string
};

export default InputName;