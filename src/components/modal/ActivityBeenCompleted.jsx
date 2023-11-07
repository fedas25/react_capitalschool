import React from 'react';
import styled from "styled-components"
import crossExit from "./../../assets/CrossExit.svg"
import H5 from "./../fonts/desktop/1920_h5"

const Container = styled.div`
    position: fixed;
    width: 650px;
    border: 2px solid #9c9c9c;
    border-radius: 50px;
    top:12%;
    left: 50%;
    margin-left: -325px;
    padding: 64px 32px 128px;
    z-index: 1;
  `;

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
        <Container>
            <CrossExit src={crossExit} onClick={handlerButton}/>
            <H5 gray>{title}</H5>
        </Container>
    )
}

