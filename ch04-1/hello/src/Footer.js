import React, { Component } from 'react';
import styled from 'styled-components'

class Footer extends Component {
    render() {
        // Tagged Template Literal 문법을 사용하여 컴포넌트에 동적으로 CSS 코드를 작성
        const FooterBox = styled.div`
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            padding: 1rem;
            background-color: ${ 
                (props)=> { 
                    if (props.theme==="basic") return 'skyblue';
                    return '#cdcdcd';  
                }
            };
            text-align: center;
        `;
        // background-color: #FF0000; => 위의 코드는 theme에 따라 동적으로 색상을 변경

        return (
            // theme에 따라 색상이 변경
            <FooterBox theme="other">React styled-component Test!!</FooterBox>
        );
    }
}

export default Footer;