import React from 'react';
import styled from 'styled-components'

export default function StyledText({ children }) {
    const SpanStyled = styled.span`
        font-family: "Montserrat-bold-600";
        font-size: 40px;
        font-variant-numeric: lining-nums tabular-nums;
        line-height: 120%;
        color: #6B73C2;
    `

    return (
        <SpanStyled>
            {children}
        </SpanStyled>
    );
}