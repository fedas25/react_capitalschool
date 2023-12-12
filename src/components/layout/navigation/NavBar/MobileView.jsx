import React from 'react'
import styled from 'styled-components'
import CrossExit from "./../../../../assets/CrossExit.svg"
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
    width: 100%;
    padding: 32px 0 72px 0;
    z-index: 1;
    background-color: #6B73C2;
    display: grid;
    grid-template-rows: repeat(8, auto);
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
    .courses {
        display: flex;
        align-items: center;
        gap: 12px;
        img {
            width: 48px;
            height: 48px;
        }
    }
    .social-networks{
        display: flex;
    }
`

export default function ({ handler, isShown }) {
    return (
        <Container>
            <img src={CrossExit} alt="alt" className='cross-exit' />
            <div className='login-registration'>
                <img src={profileIcon} alt="profileIcon" />
                <H5 teacher white>Вход / регистрация</H5>
            </div>
            <H4 white>О нас</H4>
            <div className='courses'>
                <H4 white>Курсы</H4>
                <img src={downArrow} alt="downArrow" />
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
