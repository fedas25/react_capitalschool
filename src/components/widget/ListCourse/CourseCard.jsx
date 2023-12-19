import React from "react"
import styled from "styled-components"
import Font1920_h5 from "./../../fonts/desktop/1920_h5"
import Font1920_p2 from "./../../fonts/desktop/1920_p2"
import jackdaw from "./../../../assets/jackdaw.png"
import StyledPerHour from "./PerHour.jsx";
import StyledPerCourse from "./PerCourse.jsx";

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
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 32px;
        height: auto;
    }
    `;

const Img = styled.img`
    height: 48px;
    width: 48px;
    @media (max-width: 768px) {
        width: 32px;
        height: 32px;
    }
    `;

function Characteristic({ className }) {
    return (
        <div className={className}>
            <Img src={jackdaw} alt="jackdaw" />
            <Font1920_p2>9 месяцев</Font1920_p2>
        </div>
    )
}

const StyledCharacteristic = styled(Characteristic)`
    display: flex;
    align-items: center;
    gap: 12px;
    `;

function MainText({ className }) {
    return (
        <div className={className}>
            <Font1920_p2>
                Онлайн-курс предназначены для абсолютных начинающих.
                Онлайн-курс предназначены для абсолютных начинающих.
                Онлайн-курс предназначены для абсолютнх.
            </Font1920_p2>
        </div>
    )
}

const MainTextStyled = styled(MainText)`
    width: 626px;
    @media (max-width: 768px) {
        width: 100%;
        margin-top: 8px;
    }
`;

const Specifications = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    @media (max-width: 768px) {
        gap: 12px;
    }
`;

function DescriptionCource({ className }) {
    return (
        <div className={className}>
            <Font1920_h5 course>A1 (Beginner Level)</Font1920_h5>
            <MainTextStyled />
            <Specifications>
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
    @media (max-width: 768px) {
        gap: 24px;
    }
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
            min-height: 550px;
            border-radius: 50px;
            padding: 64px 28px;
            @media (max-width: 768px) {
                width: 320px;
                padding: 48px 12px;
                border-radius: 40px;
            }
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 64px;
            `;

export default function index() {
    return (
        <CourseCardStyled />
    )
}
