import React from 'react';
import styled from 'styled-components'

    const SpanStyled = styled.span`
        font-family: "Montserrat-Medium-500";
        font-size: 37px;
        @media (max-width: 768px) {
            font-size: 26px;
        }
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        color: ${(props) => (props.black == true) ? "#1C1C1C" :
                            (props.violet == true) ? "#6B73C2" :
                            (props.gray == true) ? "#BCBCC5" :
                            (props.white == true) ? "#FFF" : "#757575"};
        font-variant-numeric: lining-nums tabular-nums;
        font-feature-settings: 'case' on;
    `

export default function StyledText({className = null, children, black = null, violet = null, white = null, gray = null, handler = null }) {
    
    return (
        <SpanStyled className={className} onClick={handler} black={+black} violet={+violet} white={+white} gray={+gray}>
            {children}
        </SpanStyled>
    );
}