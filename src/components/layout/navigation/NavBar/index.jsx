import React from 'react';
import styled from 'styled-components';
import logo from './../../../../assets/logo.svg';
import Menu from "./menuItems";

export default function NavBar({ props }) {
    const NavBar = styled.div`
        display: flex;
        max-width: 100%;
        padding: 16px 128px;
        align-items: center;
        justify-content: space-between;
        background-color: #6B73C2;
        border-bottom: 2px solid rgba(255, 255, 255, 0.50);
    `;

    function Logo({className}) {
        return(
            <img className={className} src={logo} alt='logo'/>
        )
    }

    const StyledLogo = styled(Logo)`
        height: 118px;
        width: 118px;
    `;

    return (
        <NavBar>
            <StyledLogo/>
            <Menu/>
        </NavBar>
    );
}