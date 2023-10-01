import React from 'react';
import styled from 'styled-components'
import downArrow from './../../../../assets/downArrow.png';
import Font1920h6 from "./../../../fonts/desktop/1920_h6";

export default function Сourses({ props }) {
    const Сourses = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        align-self: stretch;
    `;

    function DownArrow({className}) {
        return(
            <img className={className} src={downArrow} alt='logo'/>
        )
    }

    const DownArrowStyled = styled(DownArrow)`
        height: 48px;
        width: 48px;
    `;

    return (
        <Сourses>
            <Font1920h6 white>Курсы</Font1920h6>
            <DownArrowStyled/>
        </Сourses>
    );
}