import React from 'react';
import styled from 'styled-components'

    const SpanStyled = styled.span`
        font-family: "Montserrat-Medium-500";
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: ${(props) => (props.color === "gray") ? "#757575" :
                            (props.color === "violet") ? "#6B73C2" :
                            (props.color === "black") ? "#1C1C1C" : "#FFF"};
    `

export default function StyledText({ children, color = null }) {

    return (
        <SpanStyled color={color}>
            {children}
        </SpanStyled>
    );
}