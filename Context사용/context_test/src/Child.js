import React, { Component } from 'react';
import GrandChild from './GrandChild';
import AppContext from './AppContext';

class Child extends Component {
    render() {
        return (
            <AppContext.Consumer>
            {(context)=> {
                let msg = context.childMsg;
                return (
                    <div className="box">
                        <h2>Child!! {msg}</h2>
                        <GrandChild />
                    </div>
                )
            }}
            </AppContext.Consumer>
        );
    }
}

export default Child;