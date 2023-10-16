import React from 'react'
import styled from "styled-components"
import rightArrow from "./../assets/rightArrow.png"

function Arrow( {right = null, className = ""} ) {
    const Arrow = styled.img`
        width: 96px;
        height: 96px;
        cursor: pointer;
        ${(props) => (props.right ? `transform: rotate(180deg);` : null)}
    `

    return (
        <>
            <Arrow className={className} src={rightArrow} alt="Arrow" right={right}/>
        </>
    )
}

export default Arrow