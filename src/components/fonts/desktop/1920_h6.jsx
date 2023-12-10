import React from 'react';
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive';

const SpanStyled = styled.span`
    font-family: "Montserrat-Medium-500";
    font-size: 21px;
    @media (max-width: 768px) {
        font-size: ${(props) => (props.teacher === true && props.isMobile == true) ? "16px" : "18px"};
    }
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    color: ${(props) => (props.white == true) ? "#FFF" : "#757575"};
`

export default function StyledText({ children, white = null, className = null, teacher = null }) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <SpanStyled isMobile={isMobile} white={+white} className={className} teacher={teacher}>
            {children}
        </SpanStyled>
    );
}