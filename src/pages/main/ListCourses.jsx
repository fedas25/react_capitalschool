import React, { useState } from "react"
import styled from "styled-components"
import Font1920_h2 from "./../../components/fonts/desktop/1920_h2"
import Font1920_h5 from "./../../components/fonts/desktop/1920_h5"
import Font1920_h6 from "./../../components/fonts/desktop/1920_h6"
import Font1920_p2 from "./../../components/fonts/desktop/1920_p2"
import Font1920price from "./../../components/fonts/desktop/1920_price"
import Font1920aboute from "./../../components/fonts/desktop/1920_about"
import jackdaw from "./../../assets/jackdaw.png"
import time from "./../../assets/time.svg"
import Arrow from "../../components/Arrow"

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

    const StyledPerHour = styled(perHour)`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        `

    const DiscountQuantity = styled.div`
        width: 72px;
        height: 34px;
        display: flex;
        padding: 8px 12px;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        border: 2px solid var(--srt, #E4E4E7);
        `;

    function PriceNotDiscount({ className }) {
        return (
            <div className={className}>
                <Font1920aboute strikeout>72 000 ₽</Font1920aboute>

                <DiscountQuantity>
                    <Font1920aboute discount>-40%</Font1920aboute>
                </DiscountQuantity>
            </div>
        )
    }

    const StyledPriceNotDiscount = styled(PriceNotDiscount)`
        display: flex;
        gap: 12px;
        align-items: center;
        `;

    const ContainerPriceAllCource = styled.div`
        display: flex;
        flex-direction: column;
        gap: 12px;
        `;

    function PerCourse({ className }) {
        return (
            <div className={className}>
                <Font1920_h6>полный курс</Font1920_h6>

                <ContainerPriceAllCource>
                    <StyledPriceNotDiscount />
                    <Div>
                        <Font1920price>112 000 ₽</Font1920price>
                        <SDiv>
                            <img src={time} alt="time" />
                            <Font1920aboute>72 часа</Font1920aboute>
                        </SDiv>
                    </Div>
                </ContainerPriceAllCource>

            </div>
        )
    }

    const StyledPerCourse = styled(PerCourse)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    `

    function Prices({ className }) {
        return (
            <div className={className}>
                <StyledPerHour />
                <StyledPerCourse />
            </div>
        )
    }

    const StyledPrices = styled(Prices)`
        height: 147px;
        display: flex;
        gap: 42px;
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

    const StyledArrovLeft = styled(Arrow)`
position: absolute;
top:50%;
margin-top: -48px;
z-index: 1;
`;

    const StyledArrovRight = styled(Arrow)`
position: absolute;
top:50%;
margin-top: -48px;
right: 0px;
z-index: 1;
`



    const PageContainer = styled.div`
display: flex;
gap: 24px;

transition: translate;
transition-property: transform;
transition-duration: 500ms;
transition-timing-function: ease-in-out;
${(props) => {
    return `transform: translateX(${props.translatex}px);`
}}
`;

    function Slider({ className, children }) {
        const [offset, setOffset] = useState(0);
        
        function handleLeft() {
            setOffset((currentOfset) => {
                const newOfset = currentOfset + 760;
                console.log(Math.min(newOfset, 0));
                return Math.min(newOfset, 0)
            })
        }
        
        function handleRight() {
            setOffset((currentOfset) => {
                const newOfset = currentOfset - 760;
                console.log(newOfset);
                const maxOfset = -2280 //(6 * 760)  кол-во курсов/ ширина + отступы
                return Math.max(newOfset, maxOfset)
            })
        }

        return (
            <div className={className}>
                <StyledArrovLeft handle={handleLeft} />
                <StyledArrovRight right handle={handleRight} />
                <PageContainer translatex={offset}>
                    {children}
                </PageContainer>
            </div>
        )
    }

    const StyledSlider = styled(Slider)`
            /* min-height: 700px; */
            width: 100%;
            position: relative;
            overflow: clip;
            display: flex;
            align-items: flex-start;
            gap: 24px;
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
                        <CourseCardStyled />
                        <CourseCardStyled />
                        <CourseCardStyled />
                        <CourseCardStyled />
                        <CourseCardStyled />
                        <CourseCardStyled />
                    </StyledSlider>
                </Content>
            </Container>
        </>
    )
}
