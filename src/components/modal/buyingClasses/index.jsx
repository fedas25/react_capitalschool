import React, { useState } from 'react'
import styled from 'styled-components'

import InfoTeacherCource from "./../../InfoTeacherCource"
import crossExit from "./../../../assets/CrossExit.svg"
import time from "./../../../assets/time.svg"
import openingCross from "./../../../assets/openingCross.png"
import teacher from "./../../../assets/teacher.jpg"
import H5 from "./../../fonts/desktop/1920_h5"
import P2 from "./../../fonts/desktop/1920_p2"
import Font1920_h6 from "./../../fonts/desktop/1920_h6"
import Font1920price from "./../../fonts/desktop/1920_price"
import Font1920aboute from "./../../fonts/desktop/1920_about"
import Button from "./../../Button"
import DarkenedBackground from '../../DarkenedBackground'

const Container = styled.div`
position: fixed;
top: 10%;
left: 50%;
margin-left: -344px;
width: 788px;
border-radius: 50px;
background: #ffff;
z-index: 1;
display: grid;
padding: 64px 32px;
grid-template-columns: auto auto;
grid-template-rows: auto auto auto auto auto;
grid-template-areas:
    "infoTeacherCource infoTeacherCource"
    "paymentType paymentType"
    "discountCondition discountCondition"
    "pricePerHour pricePerCourse"
    "btn btn";
`;


// вынести
const CrossExit = styled.img`
width: 80px;
height: 80px;
position: absolute;
right: -40px;
top: -80px;
cursor: pointer;
`;




const StyledInfoTeacherCource = styled(InfoTeacherCource)`
grid-area: infoTeacherCource;
`;

const PaymentType = styled.div`
grid-area: paymentType;
margin: 48px 0;
`;

const DiscountCondition = styled.div`
grid-area: discountCondition;
margin-bottom: 24px;
`;




// вынести в компонент
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

const CountClasses = styled.div`
display: flex;
align-items: center;
gap: 12px;
`;

const StyledOpenCroos = styled.img`
height: 56px;
width: 56px;
cursor: pointer;
`;

function perHour({ className, numberHours = 1, handler, handlerActive }) {
    return (
        <div className={className} onClick={handlerActive}>
            <CountClasses>
                <Font1920_h6>{numberHours} занятие</Font1920_h6>
                <StyledOpenCroos src={openingCross} alt="openingCross" onClick={handler} />
            </CountClasses>
            <Div>
                <Font1920price>{numberHours * 1000} ₽</Font1920price>
                <SDiv>
                    <img src={time} alt="time" />
                    <Font1920aboute>{numberHours} час</Font1920aboute>
                </SDiv>
            </Div>
        </div>
    )
}

const StyledPerHour = styled(perHour)`
grid-area: pricePerHour;
justify-self: left;
height: 216px;
padding: 40px 32px;
border: ${(promps) => promps.active ? "2px solid var(--hoverButton, #323232)" : "2px solid var(--srt, #E4E4E7)"};
cursor: ${(promps) => promps.active ? "default" : "pointer"};
border-radius: 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
`;




// вынести

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
            <Font1920aboute strikeout payment>72 000 ₽</Font1920aboute>

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

const StyledFont1920_h6 = styled.div`
    display: flex;
    align-items: center;
    height: 56px;
`

function PerCourse({ className, handlerActive }) {
    return (
        <div className={className} onClick={handlerActive}>
            <StyledFont1920_h6>
                <Font1920_h6>полный курс</Font1920_h6>
            </StyledFont1920_h6>

            <ContainerPriceAllCource>
                <StyledPriceNotDiscount />
                <Div>
                    <Font1920price>11 000 ₽</Font1920price>
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
grid-area: pricePerCourse;
justify-self: right;
padding: 40px 32px;

border: ${(promps) => promps.active ? "2px solid var(--srt, #E4E4E7)" : "2px solid var(--hoverButton, #323232)"};
cursor: ${(promps) => promps.active ? "pointer" : "default"};

border-radius: 40px;
display: flex;
flex-direction: column;
justify-content: space-between;
`




const ContainerButton = styled.div`
    grid-area: btn;
    display: flex;
    justify-content: center;
    margin-top: 48px;
`




export default function BuyingClasses({ handlerClick }) {
    const [numberClasses, setNumberClasses] = useState(1)
    function addHourClasses() {
        setNumberClasses(() => numberClasses + 1)
    }

    const [isHourActive, setisHourActive] = useState(true)

    return (
        <DarkenedBackground>
            <Container>
                <CrossExit src={crossExit} onClick={handlerClick} />
                <StyledInfoTeacherCource teacherName="Гай Юлий Цезарь" nameCourse="Военное дело" srcTeacher={teacher} />
                <PaymentType>
                    <H5 gray>Выберете тип оплаты</H5>
                </PaymentType>
                <DiscountCondition>
                    <P2>скидка предоставляется только при оплате за полный курс *</P2>
                </DiscountCondition>

                <StyledPerHour active={+isHourActive} handlerActive={() => setisHourActive(true)} handler={addHourClasses} numberHours={numberClasses} />
                <StyledPerCourse active={+isHourActive} handlerActive={() => setisHourActive(false)} />

                <ContainerButton>
                    <Button title="Оплатить" handler={handlerClick} />
                </ContainerButton>
            </Container>
        </DarkenedBackground>
    )
}
