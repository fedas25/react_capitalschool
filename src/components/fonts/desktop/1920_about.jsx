import React from 'react';
import styled from 'styled-components'

const SpanStyled = styled.span`
    font-family: "Montserrat-Medium-500";
    font-size: ${(props) => (props.payment == true) ? "24px" : "18px"};
    font-variant-numeric: lining-nums tabular-nums;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: ${(props) => (props.discount === true) ? "#DC5846" :
                    (props.strikeout === true) ? "#BCBCC5" : "#757575"};
    ${(props) => (props.strikeout === true) ? "text-decoration: line-through;" : null};
`;

export default function StyledText({ children, discount = null, strikeout = null, payment = null }) {

    return (
        <SpanStyled discount={discount} strikeout={strikeout} payment={payment}>
            {children}
        </SpanStyled>
    );
}