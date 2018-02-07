import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactItem extends Component {
    render() {
        return (
            <li className="list-group-item">
                { /* 부모의 props 데이터를 UI에 반영한다. */ }
                <div className="col-xs-3">
                    <img src={this.props.photo} alt={this.props.name} 
                        className="img-responsive img-thumbnail photoWidth" />
                </div>
                <div className="col-xs-8">
                    <span className="name">{this.props.name}</span><br/>
                    <span className="glyphicon glyphicon-hand-right"></span>{' '}
                    <span >Id : {this.props.no}</span><br />
                    <span className="glyphicon glyphicon-earphone"></span>{' '}
                    <span >{this.props.tel}</span><br />
                    <span className="glyphicon glyphicon-map-marker"></span>{' '}
                    <span >{this.props.address}</span><br />
                </div>
                <div className="clearfix"></div>
            </li>
        );
    }
}

// propTypes 으로 유효성 및 타입 지정
ContactItem.propTypes = {
    no: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
    address : PropTypes.string.isRequired,
    photo : PropTypes.string.isRequired
};

export default ContactItem;