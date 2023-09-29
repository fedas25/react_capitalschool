import React from 'react';
import styled from 'styled-components'

export default function Button({ title, fontFamily }) {
    const Div = styled.div`
        display: inline-flex;
        padding: 18px 28px 20px 28px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 50px;
        background:  #000;
        color:  #ffffff;
        font-size: 24px;
        margin-left: 128px;
    `;

    const StyledDiv = styled(Div)`
        font-family: ${fontFamily}; 
    `

    return (
        <StyledDiv>
            {title}
        </StyledDiv>
    );
}