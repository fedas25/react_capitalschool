import React from 'react';
import styled from 'styled-components'

export default function StyledText({ children, gray }) {
    const SpanStyled = styled.span`
        font-family: "Montserrat-Regular-400";
        font-size: 28px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        font-variant-numeric: lining-nums tabular-nums;
        color: ${() => (gray === true) ? "#757575" : "#FFF"};
    `

    return (
        <SpanStyled>
            {children}
        </SpanStyled>
    );
}