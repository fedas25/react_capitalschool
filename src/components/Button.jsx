import React from 'react';
import styled from 'styled-components'
import FontButton from './fonts/desktop/1920_button'

export default function Button({ title, color }) {
    const Button = styled.div`
        display: inline-flex;
        padding: 18px 28px 20px 28px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 50px;
        background: ${() => {
                return (color === "violet" ? "#6B73C2" :
                        color === "gray" ? "#BCBCC5" : "#000")
                }};
        color:  #ffffff;
        font-size: 24px;
        margin-left: 128px;
    `;

    return (
        <Button>
            <FontButton>{title}</FontButton>
        </Button>
    );
}