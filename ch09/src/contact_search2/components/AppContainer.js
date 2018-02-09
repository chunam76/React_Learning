import App from './App';
import ContactActionCreator from '../actions/ContactActionCreator';
import { connect } from 'react-redux';

const mapStateToProps = (state)=> {
    return {
        contacts: state.contacts,
        isLoading: state.isLoading,
        name: state.name
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        changeName : (name) => dispatch(ContactActionCreator.changeName(name)),
        addContact : (name,tel,address) => dispatch(ContactActionCreator.asyncAddContact(name,tel,address)),
        deleteContact : (no) => dispatch(ContactActionCreator.asyncDeleteContact(no)),
        searchContact : () => dispatch(ContactActionCreator.asyncSearchContact()),
    }
}

// connect 고차함수를 이용하여 mapStateToProps, mapDispatchToProps로 AppContainer 생성
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
