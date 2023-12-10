import React from 'react'
import styled from "styled-components";
import H2 from "./../../components/fonts/desktop/1920_h2.jsx"
import H4 from "./../../components/fonts/desktop/1920_h4.jsx"
import CaruselMobile from "./../../components/CaruselMobile.jsx"
import CardMobileAdvantages from './CardMobileAdvantages.jsx';

const StyledH2 = styled(H2)`
        width: 320px;
`

const Discription = styled.div`
    width: 100%;
    margin: 80px 0 48px 0;
    display: flex;
    justify-content: center;
    `;


const StyledH4 = styled(H4)`
    width: 320px;
    ${({ right }) => right ? "text-align: right;" : null}

`

const Container = styled.div`
width: 100%;
padding: 48px 0;
margin-bottom: 80px;
border-top: 2px solid var(--srt, #E4E4E7);
border-bottom: 2px solid var(--srt, #E4E4E7);
display: grid;
grid-template-rows: auto auto auto;
justify-content: center;
row-gap: 64px;
`;

export default function MobileMakesUsSpecial() {
    return (
        <>
            <Discription>
                <StyledH2>Что делает нас особенным?</StyledH2>
            </Discription>
            <Container>
                <StyledH4>Удобный, доступный и эффективный английский</StyledH4>
                <StyledH4 right="1">Индивидуальные уроки</StyledH4>
                <StyledH4>Эффективные методики</StyledH4>
            </Container>

            <CaruselMobile>
                <CardMobileAdvantages />
                <CardMobileAdvantages />
                <CardMobileAdvantages />
            </CaruselMobile>

        </>
    )
}