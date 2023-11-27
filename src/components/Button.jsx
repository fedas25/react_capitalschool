import React from 'react';
import styled from 'styled-components'
import FontButton from './fonts/desktop/1920_button'

const Button = styled.div`
    display: inline-flex;
    padding: 18px 28px 20px 28px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 50px;
    cursor: pointer;
    background-color: ${(props) => {
            return (props.color === "violet" ? "#6B73C2" :
            props.color === "gray" ? "rgba(107, 115, 194, 0.10);" : "#000")
            }};
    transition: background-color 2000ms;
    `;

export default function Main({ title, color = null, btnColor = null, handler = null, className = null}) {
    return (
        <Button color={btnColor} onClick={handler} className={className}>
            <FontButton color={color}>{title}</FontButton>
        </Button>
    );
}