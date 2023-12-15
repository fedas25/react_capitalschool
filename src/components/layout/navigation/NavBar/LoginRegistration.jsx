import React from 'react';
import styled from 'styled-components'
import profileIcon from './../../../../assets/profileIcon.png';
import burger from './../../../../assets/burger.svg';
import Font1920h6 from "./../../../fonts/desktop/1920_h6";
import { useMediaQuery } from 'react-responsive'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
`;

function ProfileIcon({ className }) {
    return (
        <img className={className} src={profileIcon} alt='logo' />
    )
};

const ProfileIconStyled = styled(ProfileIcon)`
    height: 64px;
    width: 64px;
    cursor: pointer;
    @media (max-width: 768px) {
        width: 56px;
        height: 56px;
    }
`;

const Burger = styled.img`
        cursor: pointer;
        width: 56px;
        height: 56px;
`;

const Pointer = styled.span`
cursor: pointer;
`;

export default function Сourses({ handlerEntry, handlershowMenu }) {
    const isMobile = useMediaQuery({query: '(max-width: 768px)'})

    return (
        <Container>
            <ProfileIconStyled />
            {isMobile && <Burger onClick={handlershowMenu} src={burger} alt='drop-down menu' />}
            {!isMobile &&
            <Pointer>
                <Font1920h6 handler={handlerEntry} white={+true}>Вход / регистрация</Font1920h6>
            </Pointer>
            }
        </Container>
    );
}