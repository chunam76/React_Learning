import React, { Component } from 'react';
import ContactItem from './ContactItem';
import { ContactContext } from '../ContactContext';

class ContactList extends Component {
    render() {
        return (
            <ContactContext.Consumer>
            {(context)=>{
                return (
                    <div>
                        <ul className="list-group" id="contact-list">
                        {
                            context.contacts.map((item)=> {
                                return <ContactItem key={item.no} no={item.no} />
                            })
                        }
                        </ul>
                    </div>
                )
            }}
            </ContactContext.Consumer>
        );
    }
}

export default ContactList;