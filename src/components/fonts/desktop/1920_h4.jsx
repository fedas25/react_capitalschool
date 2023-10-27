import React from 'react';
import styled from 'styled-components'

    const SpanStyled = styled.span`
        font-family: "Montserrat-Medium-500";
        font-size: 37px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        color: ${(props) => (props.black == true) ? "#1C1C1C" :
                            (props.violet == true) ? "#6B73C2" :
                            (props.white == true) ? "#FFF" : "#757575"};
        font-variant-numeric: lining-nums tabular-nums;
        font-feature-settings: 'case' on;
    `

export default function StyledText({ children, black = null, violet = null, white = null }) {
    
    return (
        <SpanStyled black={+black} violet={+violet} white={+white}>
            {children}
        </SpanStyled>
    );
}