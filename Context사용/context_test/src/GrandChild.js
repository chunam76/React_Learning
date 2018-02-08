import React, { Component } from 'react';
import GreatGrandChild from './GreatGrandChild';
import AppContext from './AppContext';

class GrandChild extends Component {
    render() {
        return (
            <AppContext.Consumer>
            {(context)=> {
                let msg = context.grandChildMsg;
                return (
                    <div className="box">
                        <h3>Grand Child!! {msg}</h3>
                        <GreatGrandChild />
                    </div>
                )
            }}
            </AppContext.Consumer>
        );
    }
}

export default GrandChild;