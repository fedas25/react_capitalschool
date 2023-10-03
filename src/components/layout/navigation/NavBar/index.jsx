import React from 'react';
import styled from 'styled-components';
import logo from './../../../../assets/logo.svg';
import Menu from "./menuItems";

export default function NavBar({ props }) {
    const NavBar = styled.div`
        display: flex;
        max-width: 1920px;
        padding: 16px 128px;
        align-items: center;
        justify-content: space-between;
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