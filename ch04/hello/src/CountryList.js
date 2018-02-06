import React, { Component } from 'react';
import CountryItem from './CountryItem'

class CountryList extends Component {
    render() {
        // 1번째 
        // // 1. list라는 객체 배열을 만든다.
        // let list = [
        //     { no:1, country:'이집트', visited:false },
        //     { no:2, country:'일본',  visited:true },
        //     { no:3, country:'피지', visited:false },
        //     { no:4, country:'콜롬비아', visited:false }
        // ];
        // 2. countries라는 list을 이용하여 루프를 돌면서, 새로운 배열을 만든다.
        // let countries = list.map((item, index) => {
        //     return (
        //         // key를 반드시 부여해준다.
        //         <li key={item.no} 
        //             // 3항연산은 들어갈 수 있다.
        //             className={item.visited ? 'list-group-item active' : 'list-groupd' }>
        //             {item.country}
        //         </li>
        //     )
        // })   

        // 2번째 
        // let countries = this.props.countries.map((item, index) => {
        //     return (
        //         // key를 반드시 부여해준다.
        //         <li key={item.no} 
        //             // 3항연산은 들어갈 수 있다.
        //             className={item.visited ? 'list-group-item active' : 'list-groupd' }>
        //             {item.country}
        //         </li>
        //     )
        // })  

        // 3번째 
        let countries = this.props.countries.map((item, index) => {
            return (
                // <CountryItem key={item.no} country={item}/>                
                <CountryItem key={item.no} { ...item }/> // Rest Operation
            )
        })      
        return (
            <ul className="list-group">
                {countries}
            </ul>
        );
    }
}
export default CountryList;