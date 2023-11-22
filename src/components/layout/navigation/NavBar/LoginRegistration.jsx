import React from 'react';
import styled from 'styled-components'
import profileIcon from './../../../../assets/profileIcon.png';
import Font1920h6 from "./../../../fonts/desktop/1920_h6";

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
`;

const Pointer = styled.span`
cursor: pointer;
`;

export default function Сourses({ handlerEntry, props }) {
    return (
        <Container onClick={handlerEntry}>
            <ProfileIconStyled />
            <Pointer>
                <Font1920h6 white={+true}>Вход / регистрация</Font1920h6>
            </Pointer>
        </Container>
    );
}