import React from 'react';
import styled from 'styled-components'

    
    const SpanStyled = styled.span`
        font-family: "Montserrat-Medium-500";
        font-size: 28px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        color: ${(props) => (props.gray == true) ? "#757575" :
                            (props.violet === true) ? "#6B73C2" : "#1C1C1C"};
        font-variant-numeric: lining-nums tabular-nums;
        font-feature-settings: 'case' on;
    `

export default function StyledText({ children, gray = null, violet = null }) {
    return (
        <SpanStyled gray={+gray} violet={+violet}>
            {children}
        </SpanStyled>
    );
}