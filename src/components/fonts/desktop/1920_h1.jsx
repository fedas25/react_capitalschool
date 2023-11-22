import React from 'react';
import styled from 'styled-components'

const SpanStyled = styled.span`
        font-family: "Montserrat-Medium-500";
        font-size: 85px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
        color: #FFF;
    `

export default function StyledText({ children }) {
    return (
        <SpanStyled>
            {children}
        </SpanStyled>
    );
}