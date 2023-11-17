import React from 'react';
import styled from 'styled-components'

const SpanStyled = styled.span`
    font-family: "Montserrat-Medium-500";
    font-size: 21px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    color: ${(props) => (props.white == true) ? "#FFF" : "#757575"};
`

export default function StyledText({ children, white = null, className = null }) {
    return (
        <SpanStyled white={+white} className={className}>
            {children}
        </SpanStyled>
    );
}