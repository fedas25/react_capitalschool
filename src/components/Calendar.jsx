import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import arrow from "../assets/arrowCalendar.png"

const CalendarContainer = styled.div`
  height: 528px;
  width: 549px;
  background-color: #e1e1e1;

  /* .react-calendar {
    width: 100%;
    height: 100%;
  } */

`;

export default function App() {
  const [value, onChange] = useState(new Date());

  function formatSelectedDate({ activeStartDate, date, view }) {
    if (view === "month" && date.toDateString() == new Date().toDateString()) {
      return "losos"
    }

    return null;
  }

  return (
    <CalendarContainer>
      <Calendar
        onChange={onChange}
        value={value}
        tileContent={({ date, view }) => ('')}
        onClickDay={(value, event) => { new Date(value).getDate() == 23 ? console.log(new Date(value).getDate()) : null }}
        tileClassName={formatSelectedDate}        
        prev2Label="22"
        next2Label="11"
        nextLabel="22"
      />
    </CalendarContainer>
  )
}

function ArrowIcon(direction) {
  if (direction === 'left') {
    return 12
  } else {
    return 12
  }
  return <Img src={arrow} />
}

const Img = styled.img`
  height: 64px;
  width: 64px;
`;