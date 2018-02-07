import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
    
    // 최적화 작업
    shouldComponentUpdate(nextProps, nextState) {
        // 이전의 props와 비교
        return this.props.no !== nextProps.no || this.props.item !== nextProps.item;
    }
    
    render() {
        console.log("### ListItem 컴포넌트 렌더")
        return (
            <li className="list-group-item list-group-item-success">
                {this.props.no} : {this.props.item}
            </li>
        )
    }
}

ListItem.propTypes = {
    no : PropTypes.number.isRequired,
    item : PropTypes.string.isRequired
};

export default ListItem;
