import App from './App';
import ContactActionCreator from '../actions/ContactActionCreator';
import { connect } from 'react-redux';

// react-redux의 connect 고차함수 AppContainer 생성하기
// 상태에 대한 맵핑(state)
const mapStateToProps = (state)=> {
    return {
        contacts: state.contacts,
        isLoading: state.isLoading,
        name: state.name,
        showAddContact: state.showAddContact
    }
}

// 액션에 대한 맵핑(dispatch)
const mapDispatchToProps = (dispatch)=> {
    return {
        changeShowAddContact : (isShow) => dispatch(ContactActionCreator.changeShowAddContact(isShow)),
        changeName : (name) => dispatch(ContactActionCreator.changeName(name)),
        addContact : (name,tel,address) => dispatch(ContactActionCreator.asyncAddContact(name,tel,address)),
        deleteContact : (no) => dispatch(ContactActionCreator.asyncDeleteContact(no)),
        searchContact : () => dispatch(ContactActionCreator.asyncSearchContact()),
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
