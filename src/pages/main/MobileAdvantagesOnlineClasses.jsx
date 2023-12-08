import React from 'react';
import styled from "styled-components";
import H2 from "./../../components/fonts/desktop/1920_h2.jsx"
import CaruselMobile from './CaruselMobile.jsx';
import CardMobileAdvantages from './CardMobileAdvantages.jsx';

const Discriptionn = styled.div`
    width: 100%;
    margin: 80px 0 80px 0;
    padding-bottom: 48px;
    display: flex;
    justify-content: center;
    border-bottom: 2px solid #E4E4E7;
    `;    

const StyledH2 = styled(H2)`
    width: 325px;
`

export default function MobileAdvantagesOnlineClasses() {
    return (
        <>
            <Discriptionn>
                <StyledH2>В чем преимущества онлайн-занятий?</StyledH2>
            </Discriptionn>
            <CaruselMobile>
                <CardMobileAdvantages />
                <CardMobileAdvantages />
                <CardMobileAdvantages />
            </CaruselMobile>
        </>
    )
}