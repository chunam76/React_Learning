import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyButton extends Component {
    render() {
        return (
            // 버튼 클릭 시 addItem 호출
            <button className="btn btn-default" onClick={() => this.props.addItem() }>
                Add Item!!
            </button>  
        )
    }
}

MyButton.propTypes = {
    addItem: PropTypes.func.isRequired // 함수를 전달받고 반드시 필수!!
};

export default MyButton;
