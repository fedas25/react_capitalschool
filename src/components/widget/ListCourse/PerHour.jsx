import React from "react"
import styled from "styled-components"

import Font1920_h6 from "./../../fonts/desktop/1920_h6"
import Font1920price from "./../../fonts/desktop/1920_price"
import Font1920aboute from "./../../fonts/desktop/1920_about"
import time from "./../../../assets/time.svg"


const Div = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 12px;
    `;

const SDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    `;

function perHour({ className }) {
    return (
        <div className={className}>
            <Font1920_h6>1 занятие</Font1920_h6>
            <Div>
                <Font1920price>1000 ₽</Font1920price>
                <SDiv>
                    <img src={time} alt="time" />
                    <Font1920aboute>1 час</Font1920aboute>
                </SDiv>
            </Div>
        </div>
    )
}

const StyledPerHour = styled(perHour)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 768px) {
        gap: 28px;
    }
    `


export default function PerHour() {
  return (
    <StyledPerHour />
  )
}
