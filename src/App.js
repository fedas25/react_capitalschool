import React from "react"
import styled from 'styled-components'
import StyledText1920_p1 from './components/fonts/desktop/1920_p1'
import StyledText1920_p2 from './components/fonts/desktop/1920_p2'
import StyledText1920_button from './components/fonts/desktop/1920_button'
import StyledText1920_h1 from './components/fonts/desktop/1920_h1'
import StyledText1920_h2 from './components/fonts/desktop/1920_h2'
import StyledText1920_h3 from './components/fonts/desktop/1920_h3'
import StyledText1920_h4 from './components/fonts/desktop/1920_h4'
import StyledText1920_h5 from './components/fonts/desktop/1920_h5'
import StyledText1920_h6 from './components/fonts/desktop/1920_h6'
import StyledText1920_price from './components/fonts/desktop/1920_price'
import StyledText1920_aboutPrice from './components/fonts/desktop/1920_about'


export default function App() {
    const Wrapper = styled.div`
        height: 900px;
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: #cfcfcf;;
    `

    return(
        <Wrapper>
            <StyledText1920_button>button 1920</StyledText1920_button>
            <StyledText1920_p1>p1 1920</StyledText1920_p1>
            <StyledText1920_p2>Ведь для нас каждый ученик уникален и важен.regular 125% regular</StyledText1920_p2>
            <StyledText1920_h1>h1 1920</StyledText1920_h1>
            <StyledText1920_h2>h2 medium 1920 (65, 100%)</StyledText1920_h2>
            <StyledText1920_h3>h3 1920 (56, 112%) medium</StyledText1920_h3>
            <StyledText1920_h4>h4 1920 37 120% medium</StyledText1920_h4>
            <StyledText1920_h5>h5 1920 (28, 100%) medium</StyledText1920_h5>
            <StyledText1920_h6>h6 (21, 100%) 1920 medium</StyledText1920_h6>
            <StyledText1920_price>1000 ₽ price(40px, 120%) 1920 semibold</StyledText1920_price>
            <StyledText1920_aboutPrice>about price 1920 18px 1 час medium</StyledText1920_aboutPrice>
            <StyledText1920_aboutPrice discount>about price 1920 18px 1 час medium</StyledText1920_aboutPrice>
        </Wrapper>
    )
}