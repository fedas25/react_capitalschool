import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import H4 from "./fonts/desktop/1920_h4"
import { useSpring, animated } from '@react-spring/web';

const ContainerlistCourses = styled.div`
position: absolute;
width: 100%;
padding: 96px 128px 120px 96px;
display: flex;
justify-content: end;
background-color: #6B73C2;
z-index: 1;
top: -400px;
`;
const List = styled.div`
min-width: 100px;
display: flex;
flex-direction: column;
gap: 24px;
`;

const AnimatedContainerlistCourses = animated(ContainerlistCourses)

export default function DropDownListCourses({ setHandle }) {
  useEffect(() => {
    setHandle(animationHandler)
  }, []);

  const [show, setShow] = useState(1);
  const [springs, api] = useSpring(() => ({}))

  api.start({
    from: {
      y: (show === 1) ? 0 : show ? 0 : 500,
    },
    to: {
      y: (show === 1) ? 0 : show ? 500 : 0,
    },
  })

  function animationHandler() {
    if (show === 1) {
      setShow(true)
    } else setShow(!show)
  }

  return (
    <AnimatedContainerlistCourses style={springs}>
      <List>
        <H4 white>A1 (Beginner Level)</H4>
        <H4 white>A2 (Elementary Level)</H4>
        <H4 white>B1 (Intermediate Level)</H4>
        <H4 white>B2 (Upper-Intermediate Level)</H4>
        <H4 white>B1 (Intermediate Level)</H4>
        <H4 white>B2 (Upper-Intermediate Level)</H4>
        <H4 white>C1 (Intermediate Level)</H4>
        <H4 white>C2 (Upper-Intermediate Level)</H4>
        <H4 white>C2 (Upper-Intermediate Level)</H4>
        <H4 white>C2 (Upper-Intermediate Level)</H4>
        <H4 white>C2 (Upper-Intermediate Level)</H4>
        <H4 white>C2 (Upper-Intermediate Level)</H4>
        <H4 white>C2 (Upper-Intermediate Level)</H4>
        <button onClick={animationHandler}>LOSOS!</button>
      </List>
    </AnimatedContainerlistCourses>
  )
}