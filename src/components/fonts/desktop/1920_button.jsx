import React from 'react';
import styled from 'styled-components'

export default function StyledText({ children }) {
    const SpanStyled = styled.span`
        font-family: "Montserrat-Medium-500";
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: #FFF;
    `

    return (
        <SpanStyled>
            {children}
        </SpanStyled>
    );
}