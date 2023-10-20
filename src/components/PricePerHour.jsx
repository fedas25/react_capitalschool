import React from 'react'
import styled from 'styled-components'
import Font1920aboute from "./fonts/desktop/1920_about"
import Font1920price from "./fonts/desktop/1920_price"
import time from "./../assets/time.svg"

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 12px;
`;

const OneHour = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export default function PricePerHour() {
    return (
        <Container>
            <Font1920price>1000 ₽</Font1920price>
            <OneHour>
                <img src={time} alt="time" />
                <Font1920aboute>1 час</Font1920aboute>
            </OneHour>
        </Container>
    )
}
