// 함수형 Component, 단축키 rsc
import React from 'react';
import Title from './Title'

const Hello = (props) => {
    let data = {title : "해야할 일 목록"};
    return (
        <div class="container">
            <h2>{props.msg}</h2>
            <h2>{Title(data)}</h2>
        </div>
    );
};

export default Hello;