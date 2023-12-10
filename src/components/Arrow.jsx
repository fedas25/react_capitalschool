import React from 'react'
import styled from "styled-components"
import rightArrow from "./../assets/rightArrow.png"

    const Arrow = styled.img`
        width: 96px;
        height: 96px;
        @media (max-width: 768px) {
            width: 46px;
            height: 46px;
        }
        cursor: pointer;
        ${(props) => (props.right ? `transform: rotate(180deg);` : null)}
    `
function Main( {right = null, className = "", handle = null} ) {

    return (
        <>
            <Arrow onClick={handle} className={className} src={rightArrow} alt="Arrow" right={right}/>
        </>
    )
}

export default Main