import React, { Component } from 'react';
import { ContactContext } from '../ContactContext';

class ContactItem extends Component {

    getContactOne(contacts, no) {
        return contacts.find((contact)=>contact.no===no)
    }

    render() {
        return (
            <ContactContext.Consumer>
            {(context)=>{
                //let contact = this.getContactOne(context.contacts, this.props.no);
                let contact = context.contacts[this.props.index];
                return (
                    <li className="list-group-item">
                        <div className="col-xs-3">
                            <img src={contact.photo} alt={contact.name} 
                                className="img-responsive img-thumbnail photoWidth" />
                        </div>
                        <div className="col-xs-8">
                            <span className="name">{contact.name}</span><br/>
                            <span className="glyphicon glyphicon-hand-right"></span>{' '}
                            <span >Id : {contact.no}</span><br />
                            <span className="glyphicon glyphicon-earphone"></span>{' '}
                            <span >{contact.tel}</span><br />
                            <span className="glyphicon glyphicon-map-marker"></span>{' '}
                            <span >{contact.address}</span><br />
                        </div>
                        <div className="col-xs-1">
                            <div>
                                <button className="btn btn-primary"
                                    onClick={()=> {context.deleteContact(contact.no)}}>X</button>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </li>
                )
            }}
            </ContactContext.Consumer>
        );
    }
}

export default ContactItem;