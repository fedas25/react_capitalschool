import React from 'react';
import styled from 'styled-components';
import AboutUs from './AboutUs';
import Courses from './Сourses';
import Contacts from "./Contacts";
import LoginRegistration from "./LoginRegistration"

const NavBar = styled.div`
    display: flex;
    width: 736px;
    height: 100%;
    justify-content: end;
    align-items: center;
    gap: 48px;
`;

export default function MenuItems({ handle, handlerEntry }) {
    return (
        <NavBar>
            <AboutUs/>
            <Courses handle={handle}/>
            <Contacts/>
            <LoginRegistration handlerEntry={handlerEntry}/>
        </NavBar>
    );
}