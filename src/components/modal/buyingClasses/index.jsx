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

const Container = styled.div`
position: fixed;
top: 10%;
left: 50%;
border: 1px solid gray;
margin-left: -344px;
width: 788px;
border-radius: 50px;
background: #ffff;
display: grid;
padding: 64px 32px;
grid-template-columns: auto auto;
grid-template-rows: auto auto auto auto auto;
grid-template-areas:
    "infoTeacherCource infoTeacherCource"
    "paymentType paymentType"
    "discountCondition discountCondition"
    "pricePerHour pricePerCourse"
    ". .";
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
`;

function perHour({ className }) {
    return (
        <div className={className}>
            <CountClasses>
                <Font1920_h6>1 занятие</Font1920_h6>
                <StyledOpenCroos src={openingCross} alt="openingCross" />
            </CountClasses>
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
grid-area: pricePerHour;
justify-self: left;
height: 216px;

padding: 40px 32px;
border: 2px solid var(--srt, #E4E4E7);
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

function PerCourse({ className }) {
    return (
        <div className={className}>
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

border: 2px solid var(--hoverButton, #323232);
border-radius: 40px;
display: flex;
flex-direction: column;
justify-content: space-between;
`









export default function BuyingClasses() {
    return (
        <Container>
            <CrossExit src={crossExit} />
            <StyledInfoTeacherCource teacherName="Гай Юлий Цезарь" nameCourse="Военное дело" srcTeacher={teacher} />
            <PaymentType>
                <H5 gray>Выберете тип оплаты</H5>
            </PaymentType>
            <DiscountCondition>
                <P2>скидка предоставляется только при оплате за полный курс *</P2>
            </DiscountCondition>
            <StyledPerHour />
            <StyledPerCourse />
        </Container>
    )
}
