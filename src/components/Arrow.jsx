import React from 'react'
import styled from "styled-components"
import { useMediaQuery } from 'react-responsive';
import rightArrow from "./../assets/rightArrow.png"

    const Arrow = styled.img`
        width: 96px;
        height: 96px;
        @media (max-width: 768px) {    
            ${(props) => (props.startLearning === true && props.isMobile == true) ? "width: 56px; height: 56px;" : "width: 46px; height: 46px;"};
        }
        cursor: pointer;
        ${(props) => (props.right ? `transform: rotate(180deg);` : null)}
    `
function Main( {right = null, className = "", handle = null, startLearning = null} ) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <>
            <Arrow onClick={handle} startLearning={startLearning} isMobile={isMobile} className={className} src={rightArrow} alt="Arrow" right={right}/>
        </>
    )
}

export default Main