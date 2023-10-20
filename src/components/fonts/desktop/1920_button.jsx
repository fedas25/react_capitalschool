import React from 'react';
import styled from 'styled-components'

export default function StyledText({ children, color }) {
    const SpanStyled = styled.span`
        font-family: "Montserrat-Medium-500";
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        /* color: ${() => color === "violet" ? "#6B73C2" : "#FFF"}; */
        color: ${() => (color === "gray") ? "#757575" :
                        (color === "violet") ? "#6B73C2" : "#FFF"};
    `

    return (
        <SpanStyled>
            {children}
        </SpanStyled>
    );
}