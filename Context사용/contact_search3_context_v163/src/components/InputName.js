import React, { Component } from 'react';
import { ContactContext } from '../ContactContext';

class InputName extends Component {
    render() {
        return (
            <ContactContext.Consumer>
            {(context)=> {
                return (
                    <div className="row">
                    <div className="col">
                        <div className="input-group">
                            <input id="name" type="text" className="form-control" name="name" 
                                placeholder="Type name and Enter! " value={context.name}
                                onChange={(e)=>{ context.changeName(e.target.value) }} />
                            <span className="btn btn-primary input-group-addon" 
                                onClick={context.searchContact}>검{'  '}색</span>
                        </div>
                    </div>
                    </div>    
                )
            }}
            </ContactContext.Consumer>
        );
    }
}

export default InputName;