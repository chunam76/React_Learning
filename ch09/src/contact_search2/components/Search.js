import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputName from './InputName';
import ContactList from './ContactList';
import { Link } from 'react-router-dom';

import { renderRoutes } from 'react-router-config'
import ContactActionCreator from '../actions/ContactActionCreator';
import { connect } from 'react-redux';


class Search extends Component {
    render() {
        // props로 route 정보를 받는다.
        const { route } = this.props;
        return (
            <div>
                <div className="well">
                <div className="col-xs-1"></div>
                    <div className="title col-xs-10">:: 연락처 앱</div>
                    <div className="col-xs-1">
                        <Link className="btn btn-warning btn-circle" to="/add">
                            <span className="glyphicon glyphicon-plus"></span>
                        </Link>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="panel panel-default panel-borderless">
                    <div className="panel-body">
                        <InputName searchContact={this.props.searchContact} name={this.props.name}
                            changeName={this.props.changeName}/>
                    </div>
                </div>
                <ContactList contacts={this.props.contacts} 
                    deleteContact={this.props.deleteContact} />
                {renderRoutes(route.routes)}
            </div>
        );
    }
}

Search.propTypes = {
    changeName : PropTypes.func.isRequired,
    deleteContact : PropTypes.func.isRequired,
    searchContact : PropTypes.func.isRequired,

    contacts: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
};

// contacts, isLoading, name 으로 mapStateToProps 객체 생성
const mapStateToProps = (state)=> {
    return {
        contacts: state.contacts,
        isLoading: state.isLoading,
        name: state.name
    }
}

// changeName, deleteContact, searchContact 으로 mapDispatchToProps 객체 생성
// changeName 은 ContactActionCreator.changeName(name) 호출되게 dispatch
// deleteContact 은 ContactActionCreator.deleteContact(no) 호출되게 dispatch
// searchContact 은 ContactActionCreator.searchContact() 호출되게 dispatch
const mapDispatchToProps = (dispatch)=> {
    return {
        changeName : (name) => dispatch(ContactActionCreator.changeName(name)),
        deleteContact : (no) => dispatch(ContactActionCreator.asyncDeleteContact(no)),
        searchContact : () => dispatch(ContactActionCreator.asyncSearchContact()),
    }
}

// connect 고차함수를 이용하여 mapStateToProps, mapDispatchToProps로 SearchContainer 생성
const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
export default SearchContainer;

