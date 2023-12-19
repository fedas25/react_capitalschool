import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import {format} from "date-fns"
import {ru} from "date-fns/locale"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import arrow from "../assets/arrowCalendar.png"
import crossExit from "./../assets/CrossExit.svg"
import DarkenedBackground from './DarkenedBackground';

const CalendarContainer = styled.div`
  position: relative;
  background-color: #fff;
  padding: 40px 24px;
  width: 100vw;
  bottom: 0px;
  border-radius: 40px 40px 0px 0px;
  /* position: fixed; */
  z-index: 4;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  
  .react-calendar {
    width: 100%;
    background: white;
    border: none;
    line-height: 1;
    flex-shrink: 0;
  }

  .react-calendar__month-view__days__day {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--black, #1C1C1C);
  text-align: center;
  font-variant-numeric: lining-nums tabular-nums;
  font-feature-settings: 'case' on;
  font-family: "Montserrat-Medium-500";
  font-size: 18px;
  font-style: normal;
  line-height: 100%;
}
  .react-calendar__navigation__label {
      font-family: "Montserrat-Medium-500";
      font-size: 23px;
      font-style: normal;
      font-weight: 500;
      line-height: 120%;
      color: #1C1C1C;
      font-variant-numeric: lining-nums tabular-nums;
      font-feature-settings: 'case' on;
  }

  .react-calendar__year-view .react-calendar__tile{
    display: none;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
  background-color: rgba(107, 115, 194, 0.10);;
  }

  .react-calendar__navigation {
    display: flex;
    height: 88px;
    margin-bottom: 1em;
    padding: 12px 0px;
    margin-bottom: 32px;
  }

  .react-calendar__month-view__days__day--weekend {
  color: #1C1C1C;
  }

  .react-calendar__tile:disabled {
   background-color: transparent;
}

.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
  background-color: rgba(107, 115, 194, 0.10);
}

.react-calendar__tile--now {
  background-color: transparent;
}

.react-calendar__tile--now:enabled:hover,
.react-calendar__tile--now:enabled:focus {
  background-color: transparent;
}

.react-calendar__tile--hasActive {
  background-color: transparent;
}

.react-calendar__tile--hasActive:enabled:hover,
.react-calendar__tile--hasActive:enabled:focus {
  background-color: transparent;
}

.react-calendar__tile--active {
  background-color: transparent;
  color: #1C1C1C;
}


.react-calendar--selectRange .react-calendar__tile--hover {
  background-color: transparent;
}
.react-calendar__navigation button:disabled {
  background-color: transparent;
}





.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
  background-color: transparent;
}

.react-calendar__tile:disabled {
  background-color: transparent;;
}
.react-calendar__month-view__days__day--neighboringMonth {
  color: #757575;
}

.react-calendar__navigation button:disabled {
  background-color: transparent;
}


abbr[title] {
  text-decoration: none;
}

.react-calendar__navigation {
  cursor: default;
}

.react-calendar__navigation button {
  cursor: default;
}

.react-calendar__navigation button:disabled {
  cursor: default;
}

.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
  cursor: default;
}

.react-calendar__month-view__days__day--neighboringMonth {
  color: #D4D3D3;
}
/* .react-calendar__month-view__weekdays__weekday{
  padding: 8px 0 20px;
} */

.react-calendar__month-view__weekdays {
  padding: 8px 0 20px;
}

.react-calendar__month-view__weekdays__weekday {
  color: var(--text, #757575);
  font-variant-numeric: lining-nums tabular-nums;
  font-feature-settings: 'case' on;
  font-family:  "Montserrat-Medium-500";
  font-size: 21px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 21px */
  color: #757575;
  padding: 0;
  text-transform: capitalize;
}

.react-calendar__month-view__days__day{
  padding: 15px 12px;
  margin: 7.5px 0;
}

/* ВОТ ОНО АКТИВНЫЙ ЦВЕТ ПРИ НАЖАТИИ */
.react-calendar__tile--active:enabled:hover,
.react-calendar__tile--active:enabled:focus {
  background-color: transparent;
}

.losos {
    background-color: rgba(89, 196, 229, 0.10);
    color: #59C4E5;
    border-radius: 100%;
}

.karp {
    background-color: rgba(107, 115, 194, 0.10);
    color: #6B73C2;
    border-radius: 100%;
}

.okyn {
    background-color: rgba(255, 144, 144, 0.10);
    color: #FF9090;
    border-radius: 100%;
}



/* чтобы при нажатии цвет не исчезал */
.pivas {
  background-color: rgba(215, 147, 227, 0.5); 
  color: #D793E3;
  border-radius: 100%;
}

.pivas:enabled:focus {
    background-color: rgba(215, 147, 227, 0.5) !important; 
    color: #D793E3;
    border-radius: 100%;
}
/* чтобы при нажатии цвет не исчезал */

.locked {
  color: #D4D3D3
}

`;


// разные календари для отображения записей/отображения свободных дней
export default function MobileCalendar({ main = null, handlerDay = () => { }, viewingDetails, outputHandler = () => { }, className }) {

    // сделать чтобы календарь просто получал данные и отображал их в днях
    // и имел 1 обработчик на нажатие на плитку дня 

    const [isSelectedDay, setIsSelectedDay] = useState(false)

    const [value, onChange] = useState(new Date());

    function formatSelectedDate({ activeStartDate, date, view }) {
        const dateSessions = [
        { date: "2023-12-13", color: "losos" },
        { date: "2023-12-01", color: "karp" },
        { date: "2023-12-22", color: "okyn" }];

        const formatDateSessions = dateSessions.map((dateSessions) => new Date(dateSessions.date).toDateString());

        //  console.log(dateSessions); new Date(date).toDateString()
        //  в date "Wed Jul 28 1993 14:39:07 GMT+0200 (CEST)" это toString()

        const indexDay = formatDateSessions.indexOf(date.toDateString());

        if (indexDay === -1 || view != "month") return

        return dateSessions[indexDay].color;
    }

    function formatSelectedDateTeacher({ activeStartDate, date, view }) {
        const dateSessions = ["2023-12-04", "2023-12-08", "2023-12-12"];

        const formatDateSessions = dateSessions.map((date) => new Date(date).toDateString());

        //  console.log(dateSessions); new Date(date).toDateString()
        //  в date "Wed Jul 28 1993 14:39:07 GMT+0200 (CEST)" это toString()

        const indexDay = formatDateSessions.indexOf(date.toDateString());

        if (isSelectedDay && (isSelectedDay.toDateString() == date.toDateString())) {
            return "pivas"
        }

        if (indexDay === -1 || view != "month") return
        return "locked"
    }



    function ViewMoreDetails(value, event) {
        const dateDay = new Date(value);

        const dateSessions = ["2023-12-01"];
        const formatDateSessions = dateSessions.map((date) => new Date(date).toDateString());

        const indexDay = formatDateSessions.indexOf(dateDay.toDateString());

        // const dateSessions = ["2023-11-04", "2023-11-08", "2023-11-12"];
        // const formatDateSessions = dateSessions.map((date) => new Date(date).toDateString());

        if (indexDay === -1) return

        handlerDay();

        // if (new Date().toDateString() === dateDay.toDateString()) {
        //   handlerDay();
        // }
    }

    function record(value, event) {
        setIsSelectedDay(new Date(value))

        handlerDay(new Date(value));

        // setIsSelectedDay(true);

    }

    return (
        // <DarkenedBackground>
            <CalendarContainer className={className}>
            <CrossExit src={crossExit} onClick={outputHandler}/>
                <Calendar
                    onChange={onChange}
                    value={value}
                    tileContent={({ date, view }) => ('')}
                    onClickDay={viewingDetails ? ViewMoreDetails : record}
                    tileClassName={main ? formatSelectedDate : formatSelectedDateTeacher}

                    formatMonthYear={ (locale, date) => format(date, "LLLL", {locale: ru}) }

                    view="month"
                    prev2Label={null}
                    next2Label={null}
                    prevLabel={<Img src={arrow} left={+true} />}
                    nextLabel={<Img src={arrow} />}
                />
            </CalendarContainer>
        // </DarkenedBackground>
    )
}

const Img = styled.img`
  height: 48px;
  width: 48px;
  cursor: pointer;
  ${props => props.left ? "transform: rotate(180deg);" : null}
`;


// вынести
const CrossExit = styled.img`
  position: absolute;
  width: 48px;
  height: 48px;
  right: 0px;
  top: -56px;
`;