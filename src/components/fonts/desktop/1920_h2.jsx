import React from 'react';
import styled from 'styled-components'

const SpanStyled = styled.span`
    font-family: "Montserrat-Medium-500";
    font-size: 65px;
    @media (max-width: 768px) {
        font-size: 29px;
    }
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    color: #1C1C1C;
`

export default function StyledText({ children, className = null }) {
    return (
        <SpanStyled className={className}>
            {children}
        </SpanStyled>
    );
}