import React, { Component } from 'react';

class CountryItem extends Component {
    render() {
        // let item = this.props.country;
        // return (
        //     <li className={item.visited ? 'list-group-item active' : 'list-group-item' }>
        //             {item.country}
        //     </li>
        // );

        // Rest Operation
        return (
            <li className={this.props.visited ? 'list-group-item active' : 'list-group-item' }>
                    {this.props.country}
            </li>
        );
    }
}
export default CountryItem;