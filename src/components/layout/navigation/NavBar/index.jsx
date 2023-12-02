import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import logo from './../../../../assets/logo.svg';
import Menu from "./menuItems";
import H4 from "./../../../fonts/desktop/1920_h4"

const Contaier = styled.div`
    display: flex;
    max-width: 100%;
    padding: 16px 128px;
    align-items: center;
    justify-content: space-between;
    background-color: #6B73C2;
    border-bottom: 2px solid rgba(255, 255, 255, 0.50);
`;

const ContainerlistCourses = styled.div`
    position: absolute;
    min-height: 738px;
    width: 100%;
    padding: 96px 128px 120px 96px;
    display: flex;
    justify-content: end;
    background-color: #727ACA;
    z-index: 1;
    top: -1400px;
    transform: ${({ showCourses }) => showCourses == false ? "translateY(1552px)" : "translateY(0)"};
    transition: transform 300ms;
`;

const List = styled.div`
    min-width: 100px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

function Logo({ className }) {
    return (
        <img className={className} src={logo} alt='logo' />
    )
}

const StyledLogo = styled(Logo)`
    height: 118px;
    width: 118px;
`;

const StyledH4 = styled(H4)`
    cursor: pointer;
    &:hover {
        color: #BCBCC5;
    }
`;

export default function NavBar({ courses, handlerEntry }) {

    const [show, setShow] = useState(true);

    function animationHandler() {
        setShow(!show)
    }

    const listCourses = courses.map((course, i) =>
        <StyledH4 key={i} white>
            {course}
        </StyledH4>
    );

    return (
        <>
            <Contaier>
                <StyledLogo />
                <Menu showCourses={show} handle={animationHandler} handlerEntry={handlerEntry} />
            </Contaier>
            <ContainerlistCourses showCourses={show}>
                <List>
                    {listCourses}
                </List>
            </ContainerlistCourses>
        </>
    );
}
