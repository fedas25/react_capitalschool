import React from 'react';
import styled from 'styled-components'

    
export default function StyledText({ children, gray = null }) {
    const SpanStyled = styled.span`
        font-family: "Montserrat-Medium-500";
        font-size: 28px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        color: ${() => (gray === true) ? "#757575" : "#1C1C1C"};
        font-variant-numeric: lining-nums tabular-nums;
        font-feature-settings: 'case' on;
    `
    return (
        <SpanStyled>
            {children}
        </SpanStyled>
    );
}