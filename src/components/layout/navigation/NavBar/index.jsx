import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useSpring, animated } from '@react-spring/web';
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
    width: 100%;
    padding: 96px 128px 120px 96px;
    display: flex;
    justify-content: end;
    background-color: #6B73C2;
    z-index: 1;
    top: -1400px;
`;

const List = styled.div`
    min-width: 100px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const AnimatedContainerlistCourses = animated(ContainerlistCourses)

function Logo({ className }) {
    return (
        <img className={className} src={logo} alt='logo' />
    )
}

const StyledLogo = styled(Logo)`
    height: 118px;
    width: 118px;
`;

export default function NavBar({ courses, handlerEntry }) {

    const [show, setShow] = useState(1);
    const [springs, api] = useSpring(() => ({}))
    
    api.start({
        from: {
            y: (show === 1) ? 0 : show ? 0 : 1552,
        },
        to: {
            y: (show === 1) ? 0 : show ? 1552 : 0,
        },
    })
    
    function animationHandler() {
        if (show === 1) {
            setShow(true)
        } else setShow(!show)
    }

    const listCourses = courses.map((course, i) =>
        <H4 key={i} white>
            {course}
        </H4>
      );

    return (
        <>
            <Contaier>
                <StyledLogo />
                <Menu handle={animationHandler} handlerEntry={handlerEntry}/>
            </Contaier>
            <AnimatedContainerlistCourses style={springs}>
                <List>
                    {listCourses}
                </List>
            </AnimatedContainerlistCourses>
        </>
    );
}
