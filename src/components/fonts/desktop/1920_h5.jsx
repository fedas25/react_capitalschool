import React from 'react';
import styled from 'styled-components'

export default function StyledText({ children }) {
    const SpanStyled = styled.span`
        font-family: "Montserrat-Medium-500";
        font-size: 28px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        color: #1C1C1C;
    `

    return (
        <SpanStyled>
            {children}
        </SpanStyled>
    );
}