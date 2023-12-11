import React from 'react';
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive';

    const SpanStyled = styled.span`
        font-family: "Montserrat-Medium-500";
        font-size: 24px;
        @media (max-width: 768px) {
            font-size: ${(props) => (props.test === true && props.isMobile == true) ? "21px" : "16px"};
        }
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: ${(props) => (props.color === "gray") ? "#757575" :
                            (props.color === "violet") ? "#6B73C2" :
                            (props.color === "black") ? "#1C1C1C" : "#FFF"};
        transition: color 200ms;
    `

export default function StyledText({ children, color = null, test = null }) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <SpanStyled color={color} isMobile={isMobile} test={test}>
            {children}
        </SpanStyled>
    );
}