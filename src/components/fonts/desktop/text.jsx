import React from 'react';
import styled from 'styled-components'

export default function StyledText({ children }) {
    const SpanStyled = styled.span`
        font-family: "Montserrat";
        font-size: 85px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
        color: #FFF;
    `

    return (
        <SpanStyled>
            {children}
        </SpanStyled>
    );
}