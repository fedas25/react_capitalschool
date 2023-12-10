import React from 'react';
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive';

const SpanStyled = styled.span`
    font-family: "Montserrat-Regular-400";
    font-size: 28px;
    @media (max-width: 768px) {
            font-size: ${(props) => (props.teacher === true && props.isMobile == true) ? "21px" : "17px"};
    }
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    font-variant-numeric: lining-nums tabular-nums;
    color: ${(props) => (props.gray === true) ? "#757575" : "#FFF"};
`

export default function StyledText({ children, gray = null, teacher = null }) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <SpanStyled gray={gray} teacher={teacher} isMobile={isMobile}>
            {children}
        </SpanStyled>
    );
}