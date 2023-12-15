import React from 'react';
import H5 from "../../fonts/desktop/1920_h5"
import MainContainer from './MainContainer';
import CrossExit from './CrossExit';

export default function ActivityBeenCompleted({ title, handlerButton }) {
    return (
        <MainContainer activityBeenCompleted>
            <CrossExit handler={handlerButton}/>
            <H5 gray>{title}</H5>
        </MainContainer>
    )
}

