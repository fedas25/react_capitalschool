import React from 'react';
import styled from 'styled-components'

export default function StyledText({ children }) {
    const SpanStyled = styled.span`
        font-family: "Montserrat-Medium-500";
        font-size: 37px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        color: #757575;
    `

    return (
        <SpanStyled>
            {children}
        </SpanStyled>
    );
}