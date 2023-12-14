import React, {useState} from 'react';
import styled from 'styled-components';
import AboutUs from './AboutUs';
import Courses from './Сourses';
import Contacts from "./Contacts";
import LoginRegistration from "./LoginRegistration"
import MobileView from './MobileView';
import { useMediaQuery } from 'react-responsive';

const NavBar = styled.div`
    display: flex;
    width: 736px;
    height: 100%;
    justify-content: end;
    align-items: center;
    gap: 48px;
`;

export default function MenuItems({ handle, handlerEntry, showCourses }) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    const [isShowMenu, setIsShowMenu] = useState(true);

    function changeListShow() {
        setIsShowMenu(!isShowMenu);
    }

    return (
        <NavBar>
            <MobileView isShown={isShowMenu} handlerClosures={changeListShow} handlerEntry={handlerEntry}/>
            {!isMobile &&
                <>
                    <AboutUs />
                    <Courses handle={handle} showCourses={showCourses} />
                    <Contacts />
                </>
            }
            <LoginRegistration handlerEntry={handlerEntry} handlershowMenu={changeListShow}/>
        </NavBar>
    );
}