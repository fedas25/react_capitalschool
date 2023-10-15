import React from "react"
import styled from "styled-components"
import Font1920_h2 from "./../../components/fonts/desktop/1920_h2"
import Font1920_h5 from "./../../components/fonts/desktop/1920_h5"
import Font1920_h6 from "./../../components/fonts/desktop/1920_h6"
import Font1920_p2 from "./../../components/fonts/desktop/1920_p2"
import Font1920price from "./../../components/fonts/desktop/1920_price"
import Font1920aboute from "./../../components/fonts/desktop/1920_about"
import jackdaw from "./../../assets/jackdaw.png"
import time from "./../../assets/time.svg"
import rightArrow from "./../../assets/rightArrow.png"

export default function ListCourses() {
    const Container = styled.div`
        background-color: #EFEEF4;
        width: 100%;
        margin: 0 auto;
        padding: 168px 0;
        display: flex;
        justify-content: center;
    `;

    const Description = styled.p`
        max-width: 1664px;
        font-size: 65px;
        color: black;
    `;

    const Content = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        gap: 96px;
    `;

    const Arrow = styled.img`
        width: 96px;
        height: 96px;
        position: absolute;
        top:50%;
        margin-top: -48px;
        cursor: pointer;
        ${ (props) => (props.left ? `right: 0px;
                                     transform: rotate(180deg);`
                                     : null) }
    `

    function Slider({ className, children }){
        return(
            <div className={className}>
                <Arrow src={rightArrow} alt="Arrow"/>
                <Arrow src={rightArrow} alt="Arrow" left/>
                {children}
            </div>
        )
    }

    const StyledSlider = styled(Slider)`
        min-height: 700px;
        width: 100%;
        position: relative;
        overflow: clip;
        display: flex;
        align-items: flex-start;
        gap: 24px;
    `;

    function MainText({ className }) {
        return (
            <div className={className}>
                <Font1920_p2>Онлайн-курс предназначены для абсолютных начинающих. Мир английского языка через базовые фразы, простые диалоги и повседневную лексику. Онлайн-курс предназначены для абсолютных начин</Font1920_p2>
            </div>
        )
    }

    const MainTextStyled = styled(MainText)`
        width: 626px;
        height: 115px;
    `;

    const Specifications = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
    `;

    function Characteristic({ className }) {
        return (
            <div className={className}>
                <img src={jackdaw} alt="jackdaw" />
                <Font1920_p2>9 месяцев</Font1920_p2>
            </div>
        )
    }

    const StyledCharacteristic = styled(Characteristic)`
        display: flex;
        align-items: center;
        gap: 12px;
    `;

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

    const StyledperHour = styled(perHour)`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `

    function Prices({ className }) {
        return (
            <div className={className}>
                <StyledperHour />
                {/* <PerCourse /> */}
            </div>
        )
    }

    const StyledPrices = styled(Prices)`
        height: 147px;
        display: flex;
        gap: 24px;
    `;


    function DescriptionCource({ className }) {
        return (
            <div className={className}>
                <Font1920_h5>A1 (Beginner Level)</Font1920_h5>
                <Specifications>
                    <MainTextStyled />
                    <StyledCharacteristic />
                    <StyledCharacteristic />
                    <StyledCharacteristic />
                    <StyledCharacteristic />
                </Specifications>
                <StyledPrices />
            </div>
        )
    }

    const DescriptionCourceStyled = styled(DescriptionCource)`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 32px;
    `;

    function CourseCard({ className }) {
        return (
            <div className={className}>
                <DescriptionCourceStyled />
            </div>
        )
    };

    const CourseCardStyled = styled(CourseCard)`
        background-color: #FFF;
        width: 680px;

        min-height: 750px;
        
        border-radius: 50px;
        padding: 64px 28px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 64px;
    `;

    return (
        <>
            <Container>
                <Content>
                    <Description>
                        <Font1920_h2>Погрузитесь в потрясающий мир спокойного обучения</Font1920_h2>
                    </Description>
                    <StyledSlider>
                        <CourseCardStyled />
                        <CourseCardStyled />
                        <CourseCardStyled />
                    </StyledSlider>
                </Content>
            </Container>
        </>
    )
}
