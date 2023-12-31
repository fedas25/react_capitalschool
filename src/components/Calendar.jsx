import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import arrow from "../assets/arrowCalendar.png"

const CalendarContainer = styled.div`
  width: 588px;
  height: 662px;
  border-radius: 50px;
  border: 2px solid var(--srt, #E4E4E7);
  display: flex;
  padding: 40px 28px;
  justify-content: center;
  align-items: flex-start;
  
  .react-calendar {
    width: 528px;
    height: 550px;
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
  font-size: 21px;
  font-style: normal;
  line-height: 100%;
}
  .react-calendar__navigation__label {
      font-family: "Montserrat-Medium-500";
      font-size: 28px;
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

.react-calendar__tile--active:enabled:hover,
.react-calendar__tile--active:enabled:focus {
  background-color: transparent;
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

.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
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
  padding: 25.5px 28px;
}


.losos {
    background-color: rgba(89, 196, 229, 0.10);
    color: #59C4E5;
    border-radius: 40%;
}

.karp {
    background-color: rgba(107, 115, 194, 0.10);
    color: #6B73C2;
    border-radius: 40%;
}

.okyn {
    background-color: rgba(255, 144, 144, 0.10);
    color: #FF9090;
    border-radius: 40%;
}



/* чтобы при нажатии цвет не исчезал */
.pivas {
  background-color: rgba(215, 147, 227, 0.5); 
  color: #D793E3;
  border-radius: 40%;
}

.pivas:enabled:focus {
    background-color: rgba(215, 147, 227, 0.5) !important; 
    color: #D793E3;
    border-radius: 40%;
}
/* чтобы при нажатии цвет не исчезал */

.locked {
  color: #D4D3D3
}

`;
// разные календари для отображения записей/отображения свободных дней
export default function App({main = null, handlerDay = () => {}, className}) {

  // сделать чтобы календарь просто получал данные и отображал их в днях
  // и имел 1 обработчик на нажатие на плитку дня 

  const [isSelectedDay, setIsSelectedDay] = useState(false)

  const [value, onChange] = useState(new Date());

  function formatSelectedDate({ activeStartDate, date, view }) {
    const dateSessions = [{date: "2023-11-04", color: "losos"},
                          {date: "2023-11-08", color: "karp"},
                          {date: "2023-11-12", color: "okyn"}];

    const formatDateSessions = dateSessions.map((dateSessions) => new Date(dateSessions.date).toDateString());

    //  console.log(dateSessions); new Date(date).toDateString()
    //  в date "Wed Jul 28 1993 14:39:07 GMT+0200 (CEST)" это toString()

    const indexDay = formatDateSessions.indexOf(date.toDateString());

    if (indexDay === -1 || view != "month") return

    return dateSessions[indexDay].color;
  }

  function formatSelectedDateTeacher({ activeStartDate, date, view }) {
    const dateSessions = ["2023-11-04", "2023-11-08", "2023-11-12"];

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

    const dateSessions = ["2023-11-04", "2023-11-08", "2023-11-12"];
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
    
    handlerDay();
    
    // setIsSelectedDay(true);

  }

  return (
    <CalendarContainer className={className}>
      <Calendar
        onChange={onChange}
        value={value}
        tileContent={({ date, view }) => ('')}
        onClickDay={record}
        tileClassName={main ? formatSelectedDate : formatSelectedDateTeacher}
        // formatYear={(locale, date) => ""}
        view="month"
        prev2Label={null}
        next2Label={null}
        prevLabel={<Img src={arrow} left={+true}/>}
        nextLabel={<Img src={arrow}/>}
      />
    </CalendarContainer>
  )
}

const Img = styled.img`
  height: 64px;
  width: 64px;
  cursor: pointer;
  ${props => props.left ? "transform: rotate(180deg);" : null}
`;
