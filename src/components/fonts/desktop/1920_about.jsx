import React from 'react';
import styled from 'styled-components'

export default function StyledText({ children, discount = null }) {
    const SpanStyled = styled.span`
        font-family: "Montserrat-Medium-500";
        font-size: 18px;
        font-variant-numeric: lining-nums tabular-nums;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: ${() => (discount === true) ? "#DC5846" : "#757575"};
    `;

    return (
        <SpanStyled>
            {children}
        </SpanStyled>
    );
}