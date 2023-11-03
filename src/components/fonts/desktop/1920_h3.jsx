import React from 'react';
import styled from 'styled-components'

const SpanStyled = styled.span`
    font-family: "Montserrat-Medium-500";
    font-size: 56px;
    font-style: normal;
    font-weight: 500;
    line-height: 112%;
    color: #1C1C1C;
`

export default function StyledText({ children }) {
    return (
        <SpanStyled>
            {children}
        </SpanStyled>
    );
}