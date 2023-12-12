import React from 'react';
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive';

    const SpanStyled = styled.span`
        font-family: "Montserrat-Medium-500";
        font-size: ${(props) => props.test ? "32px" : "28px"} ;
        @media (max-width: 768px) {
            font-size: ${(props) => (props.teacher === true && props.isMobile == true) ? "23px" : "25px"} ;
        }
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        color: ${(props) => (props.gray == true) ? "#757575" :
                            (props.violet == true) ? "#6B73C2" :
                            (props.white == true) ? "#FFF" : "#1C1C1C"};
        font-variant-numeric: lining-nums tabular-nums;
        font-feature-settings: 'case' on;
    `

export default function StyledText({ children, white = null, gray = null, violet = null, handler = null, test = null, className = null, teacher = null}) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <SpanStyled isMobile={isMobile} teacher={teacher} onClick={handler} gray={+gray} violet={+violet} white={+white} test={+test} className={className}>
            {children}
        </SpanStyled>
    );
}