import React from 'react';
import styled from 'styled-components'

const SpanStyled = styled.span`
    font-family: "Montserrat-Regular-400";
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    font-variant-numeric: lining-nums tabular-nums;
    color: ${(props) => (props.gray === true) ? "#757575" : "#FFF"};
`

export default function StyledText({ children, gray = null }) {
    return (
        <SpanStyled gray={gray}>
            {children}
        </SpanStyled>
    );
}