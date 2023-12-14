import React, { useState } from 'react';
import styled from 'styled-components';
import CrossExit from "./../../../../assets/CrossExit.svg";
import profileIcon from './../../../../assets/profileIcon.png';
import downArrow from './../../../../assets/downArrow.png';
import whatsapp from './../../../../assets/whatsapp.png';
import vk from './../../../../assets/vk.png';
import telegramm from './../../../../assets/telegramm.png';
import H5 from "./../../../fonts/desktop/1920_h5"
import H4 from "./../../../fonts/desktop/1920_h4"
import P1 from "./../../../fonts/desktop/1920_p1"

const Container = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
    top: ${(props) => props.isShown == false ? "0px" : "-590px"};
    transition: top 400ms;
    width: 100%;
    padding: 32px 0 72px 0;
    z-index: 1;
    background-color: #6B73C2;
    display: grid;
    grid-template-rows: repeat(7, auto);
    grid-template-columns: 90vw;
    row-gap: 24px;
    justify-content: center;
    .cross-exit {
        margin-bottom: 8px;
    }
    img {
        width: 56px;
        height: 56px;
        justify-self: end;
    }
    .login-registration {
        display: flex;
        align-items: center;
        gap: 12px;
        img {
            width: 56px;
            height: 56px;
        }
    }
    .container-courses{
        display: flex;
        flex-direction: column;
        .courses {
            display: flex;
            align-items: center;
            gap: 12px;
        }
    }
    .social-networks{
        display: flex;
    }
`

const Arrow = styled.img`
    width: 48px;
    height: 48px;
    transform: ${(props) => props.show == false ? "rotate(0)" : "rotate(180deg)"};
    transition: transform 300ms linear;
`;

const DropDownListCourses = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow: hidden;
    margin: ${(props) => props.show == false ? "0" : "28px 0 32px 0"}; /*max-height вычисляется по кол-ву курсов */
    max-height: ${(props) => props.show == false ? "0px" : props.maxHeight + "px"};
    transition: max-height 300ms ease-in-out, margin 300ms ease-in-out;
`;

export default function ({ handlerClosures, handlerEntry, isShown }) {
    const [isListShow, setIsListShow] = useState(false);

    function changeListShow() {
        setIsListShow(!isListShow);
    }

    const courses = ["A1 (Beginner Level)", "A1 (Beginner Level)", "A1 (Beginner Level)", "A1 (Beginner Level)", "A2 (Elementary Level)", "B2 (Upper-Intermediate Level)", "ЕГЭ", "ОГЭ"]

    const listСourses = courses.map((courseName) => <H5 teacher white>{courseName}</H5>)

    const maxHeightDropDownListCourses = (28 * courses.length) + ((courses.length - 1) * 20) + 28;
    // сделать добавление max-height при длинных названиях курсов 28px за каждый длинный курс
    // который идёт в 2 строчки

    return (
        <Container isShown={isShown}>
            <img
                src={CrossExit}
                onClick={() => { handlerClosures(); setIsListShow(false) }}
                alt="alt"
                className='cross-exit'
            />
            <div className='login-registration'>
                <img src={profileIcon} alt="profileIcon" />
                <H5 teacher white handler={handlerEntry}>Вход / регистрация</H5>
            </div>
            <H4 white>О нас</H4>
            <div className='container-courses'>
                <div className='courses' onClick={changeListShow}>
                    <H4 white>Курсы</H4>
                    <Arrow show={+isListShow} src={downArrow} alt="downArrow" />
                </div>
                <DropDownListCourses show={+isListShow} maxHeight={maxHeightDropDownListCourses}>
                    {listСourses}
                </DropDownListCourses>
            </div>
            <P1 teacher>ООО «Lorem ipsum»</P1>
            <P1 teacher>+7 499 727-38-38 / info@fitsharing.ru</P1>
            <div className='social-networks'>
                <img src={whatsapp} alt="whatsapp" />
                <img src={vk} alt="vk" />
                <img src={telegramm} alt="telegramm" />
            </div>
        </Container>
    )
}
