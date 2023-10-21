import React from 'react';
import styled from 'styled-components'

export default function StyledText({ children, black, violet  }) {
    const SpanStyled = styled.span`
        font-family: "Montserrat-Medium-500";
        font-size: 37px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        color: #757575;
        color: ${() => (black === true) ? "#1C1C1C" :
                        (violet === true) ? "#6B73C2" : "#757575"};
        font-variant-numeric: lining-nums tabular-nums;
        font-feature-settings: 'case' on;
    `

    return (
        <SpanStyled>
            {children}
        </SpanStyled>
    );
}