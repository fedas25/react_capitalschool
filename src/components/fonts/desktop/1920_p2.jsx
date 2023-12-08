import React from 'react';
import styled from 'styled-components'

const SpanStyled = styled.span`
    font-family: "Montserrat-Regular-400";
    font-size: 22px;
    @media (max-width: 768px) {
        font-size: 17px;
    }
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    color: #757575;
`

export default function StyledText({ children }) {
    return (
        <SpanStyled>
            {children}
        </SpanStyled>
    );
}