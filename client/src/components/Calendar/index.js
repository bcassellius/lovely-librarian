import React from 'react';
import FullCalendar from '@fullcalendar/react';
import daygridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timegridPlugin from '@fullcalendar/timegrid';

function Calendar() {
  const handleDateClick = (dateClickInfo)=>{
    alert(dateClickInfo.dateStr);
  }

  const data = [
    {
      title:"Costume Parade",
      start: "2021-10-31"
    },
    {
      title: "10a Story Time",
      start: "2021-11-03"
    },
    {
      title: "11a Staff Meeting",
      start: "2021-11-01"
    },
    {
      title: "10a Story Time",
      start: "2021-11-03"
    },
    {
      title: "Author Visit",
      start: "2021-11-03"
    },
    {
      title: "Book Signing",
      start: "2021-11-04"
    },
    {
      title: "Book Club",
      start: "2021-11-05"
    },
    {
      title: "10a Story Time",
      start: "2021-11-10"
    },
    {
      title: "10a Story Time",
      start: "2021-11-17"
    },
    {
      title: "10a Story Time",
      start: "2021-11-24"
    }
  ]
  return (
    <FullCalendar
      events={data}
      plugins={[daygridPlugin, timegridPlugin, interactionPlugin]} 
      editable={true}
      selectable={true}
      dateClick={handleDateClick}
    />
  );
}

export default Calendar;