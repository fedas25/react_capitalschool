import React from 'react';
import styled from "styled-components"
import crossExit from "./../../../assets/CrossExit.svg"
import H5 from "../../fonts/desktop/1920_h5"
import MainContainer from './MainContainer';

const CrossExit = styled.img`
    width: 80px;
    height: 80px;
    position: absolute;
    right: -40px;
    top: -80px;
    cursor: pointer;
`;

export default function ActivityBeenCompleted({ title, handlerButton }) {
    return (
        <MainContainer activityBeenCompleted>
            <CrossExit src={crossExit} onClick={handlerButton}/>
            <H5 gray>{title}</H5>
        </MainContainer>
    )
}

