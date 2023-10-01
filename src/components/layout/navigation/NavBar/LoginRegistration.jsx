import React from 'react';
import styled from 'styled-components'
import profileIcon from './../../../../assets/profileIcon.png';
import Font1920h6 from "./../../../fonts/desktop/1920_h6";

export default function Сourses({ props }) {
    const Сourses = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
    `;

    function ProfileIcon({className}) {
        return(
            <img className={className} src={profileIcon} alt='logo'/>
        )
    }

    const ProfileIconStyled = styled(ProfileIcon)`
        height: 64px;
        width: 64px;
    `;

    return (
        <Сourses>
            <ProfileIconStyled/>
            <Font1920h6 white>Вход / регистрация</Font1920h6>
        </Сourses>
    );
}