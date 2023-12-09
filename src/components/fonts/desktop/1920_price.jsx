import React from 'react';
import styled from 'styled-components'

    const SpanStyled = styled.span`
        font-family: "Montserrat-bold-600";
        font-size: 40px;
        @media (max-width: 768px) {
            font-size: 30px;
        }
        font-variant-numeric: lining-nums tabular-nums;
        line-height: 120%;
        color: #6B73C2;
    `
export default function StyledText({ children }) {
    return (
        <SpanStyled>
            {children}
        </SpanStyled>
    );
}