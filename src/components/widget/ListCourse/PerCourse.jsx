import React, { useState } from "react"
import styled from "styled-components"
import Font1920_h6 from "./../../fonts/desktop/1920_h6"
import Font1920price from "./../../fonts/desktop/1920_price"
import Font1920aboute from "./../../fonts/desktop/1920_about"
import time from "./../../../assets/time.svg"

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

export default function index() {
    return (
        <StyledPerCourse />
    )
}