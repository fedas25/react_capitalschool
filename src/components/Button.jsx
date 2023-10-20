import React from 'react';
import styled from 'styled-components'
import FontButton from './fonts/desktop/1920_button'

export default function Button({ title, color, textColor}) {

    const Button = styled.div`
        display: inline-flex;
        padding: 18px 28px 20px 28px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 50px;
        cursor: pointer;
        background: ${() => {
                return (color === "violet" ? "#6B73C2" :
                        color === "gray" ? "rgba(107, 115, 194, 0.10);" : "#000")
                }};
        `;

    return (
        <Button>
            <FontButton color={textColor}>{title}</FontButton>
        </Button>
    );
}