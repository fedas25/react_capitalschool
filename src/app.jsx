import React, { useState, useEffect, useRef, useImperativeHandle } from 'react';
import styled, { keyframes } from "styled-components"
import { useSpring, animated } from '@react-spring/web';

import TeacherAccount from "./pages/teacherAccount"
import StudentAccount from "./pages/studentAccount"
import Main from "./pages/main"
import Course from "./pages/course"

export default function App() {
  return (
    // <Main />
    <Course />
    // <StudentAccount />
    // <TeacherAccount/>
  )
}


// const childRef = useRef(null);
{/* <QuestionAnswer /> */ }
{/* <MainPage /> */ }
{/* <Child ref={childRef} />
      <button onClick={save}>Save</button> */}
{/* <AA ref={childRef} /> */ }
{/* <button onClick={() => handleOpenModal(true)}>dsdfsdf</button> */ }
{/* <TransferRecord /> */ }
{/* <MarkVisit /> */ }
{/* <BuyingClasses /> */ }
{/* <Recording /> */ }
{/* <Registration /> */ }
{/* <StudentAccount /> */ }
{/* <Course /> */ }
{/* <TeacherAccount /> */ }