import React, { Component } from 'react';
import AppContext from './AppContext';

class GreatGrandChild extends Component {
    render() {
        return (
            <AppContext.Consumer>
            {(context)=> {
                let msg = context.greatGrandChildMsg;
                return (
                    <div className="box">
                        <h3>Great Grand Child!! {msg}</h3>
                    </div>
                )
            }}
            </AppContext.Consumer>
        );
    }
}

export default GreatGrandChild;