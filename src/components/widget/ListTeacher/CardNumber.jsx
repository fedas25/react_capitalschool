import React from "react"
import styled from "styled-components"
import Font1920_h4 from "./../../fonts/desktop/1920_h4"

export default function CardNumber() {
  return <StyledNavigation />
}

function cardNumberr({ className, cardNumber, numberOfCards }) {
    return (
        <span className={className}>
            <Font1920_h4>
                {cardNumber} / {numberOfCards}
            </Font1920_h4>
        </span>
    )
}
// добавить в компонент шрифта цвет
const StyledCardNumber = styled(cardNumberr)`
        color: #BCBCC5;
        font-feature-settings: 'case' on;
    `;

function Navigation({ className }) {
    return (
        <div className={className}>
            <StyledCardNumber cardNumber="1" numberOfCards="12" />
        </div>
    )
}

const StyledNavigation = styled(Navigation)`
        width: 100%;
        @media (max-width: 768px) {
            width: auto;
            align-items: start;
        }
        display: flex;
        justify-content: space-between;
        align-items: center;
`;