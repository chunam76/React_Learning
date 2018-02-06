import React, { Component } from 'react';
import PropTypes from 'prop-types'; // 유효성 검증, rstp

class Calc extends Component {
    // static propTypes = {} 클래스 내부에 작성을 할 수도 있다.

    render() {
        let result = 0;
        switch(this.props.oper) {
            case "+":
                result = parseFloat(this.props.x) + parseFloat(this.props.y);
                break;
            case "*":
                result = parseFloat(this.props.x) * parseFloat(this.props.y);
                break;
            default:
                result = 0;
                break;
        }
        return (
            <div>
                <h3>연산방식 : {this.props.oper}</h3>
                {this.props.x} {this.props.oper} {this.props.y} = {result}
            </div>
        );
    }
}

// 유효성 검증을 위한 propTypes 설정
Calc.propTypes = {
    x : PropTypes.number,
    y : PropTypes.number.isRequired, // 반드시 필요하다
    // oper는 특정 문자열만 받아야 한다 => 사용자 정의가 필요
    oper: function(props, name, component) {
        if(props[name] !== "*" && props[name] !== "+")
            // return new Error(name + "");
            return new Error(`${name} 속성의 값은 +, *만 허용합니다.`);
    }
};

// Default 값 지정
Calc.defaultProps = {
    x:0,
    y:0,
    oper:"+"
};

export default Calc;