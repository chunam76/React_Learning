import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

class ContactList extends Component {
    render() {
        let contacts = this.props.contacts.map((item)=> {
            { /* ContactItem 을 리턴 */ }
            return <ContactItem key={item.no} {...item} />
        })

        return (
            <div>
                <ul className="list-group" id="contact-list">
                    {contacts}
                </ul>
            </div>
        );
    }
}

ContactList.propTypes = {
    contacts : PropTypes.arrayOf(PropTypes.object)
}

export default ContactList;