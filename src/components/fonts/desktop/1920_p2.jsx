import React from 'react';
import styled from 'styled-components'

export default function StyledText({ children }) {
    const SpanStyled = styled.span`
        font-family: "Montserrat-Regular-400";
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        color: #757575;
    `

    return (
        <SpanStyled>
            {children}
        </SpanStyled>
    );
}