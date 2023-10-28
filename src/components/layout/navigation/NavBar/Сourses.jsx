import React from 'react';
import styled from 'styled-components'
import downArrow from './../../../../assets/downArrow.png';
import Font1920h6 from "./../../../fonts/desktop/1920_h6";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    cursor: pointer;
`;

function DownArrow({className}) {
    return(
        <img className={className} src={downArrow} alt='logo'/>
    )
};

const DownArrowStyled = styled(DownArrow)`
    height: 48px;
    width: 48px;
`;

export default function Сourses({ handle }) {
    return (
        <Container onClick={handle}>
            <Font1920h6 white>Курсы</Font1920h6>
            <DownArrowStyled/>
        </Container>
    );
}