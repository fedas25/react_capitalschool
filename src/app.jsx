import React from "react"
import styled from "styled-components"
import MainPager from "./pages/main"
import Course from "./pages/course"
import StudentAccount from "./pages/studentAccount"

export default function App() {
    const container = styled.div`
        height: 100%;
        display: flex;
        padding: 168px 0px;
        flex-direction: column;
        align-items: flex-start;
        gap: 168px;
    `
    return (
        <>
            {/* <MainPager /> */}
            {/* <Course /> */}
            <StudentAccount />
        </>
    )
}