import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logger from './Logger';

class ListItem extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        // 이전의 props와 비교
        return this.props.no !== nextProps.no || this.props.item !== nextProps.item;
    }
    
    render() {
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

// export default ListItem;
export default Logger(ListItem);
