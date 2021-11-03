import React from 'react';
import FullCalendar from '@fullcalendar/react';
import daygridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timegridPlugin from '@fullcalendar/timegrid';

function Calendar() {
  const handleDateClick = (dateClickInfo)=>{
    alert(`🚧 Under Construction 🚧
    You can't add new events just yet...
    
    ` 
    + `You clicked on `+ dateClickInfo.dateStr);
  }

  const data = [
    {
      title: "3p Teen Movie",
      start: "2021-10-15"
    },
    {
      title: "3p Teen Movie",
      start: "2021-11-19"
    },
    {
      title: "3p Teen Movie",
      start: "2021-11-08"
    },
    {
      title: "10a Breakfast with Mayor",
      start: "2021-10-18"
    },
    {
      title: "2p Author Visit",
      start: "2021-10-03"
    },
    {
      title: "2p Author Visit",
      start: "2021-10-10"
    },
    {
      title: "2p Author Visit",
      start: "2021-10-17"
    },
    {
      title: "10a Story Time",
      start: "2021-10-06"
    },
    {
      title: "10a Story Time",
      start: "2021-10-13"
    },
    {
      title: "10a Story Time",
      start: "2021-10-20"
    },
    {
      title: "10a Story Time",
      start: "2021-09-29"
    },
    {
      title:"Costume Parade",
      start: "2021-10-31"
    },
    {
      title: "10a Story Time",
      start: "2021-10-27"
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
      title: "2p Author Visit",
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
      title: "5p Poetry Slam",
      start: "2021-11-18"
    },
    {
      title: "10a Story Time",
      start: "2021-11-24"
    },
    {
      title: "12p Lunch with Lovely Librarian",
      start: "2021-11-25"
    },
    {
      title: "3p Story Time With Santa",
      start: "2021-11-30"
    },
    {
      title: "6p P.J. Story Time",
      start: "2021-12-03"
    },
    {
      title: "6p Book Club",
      start: "2021-12-12"
    },
  ]
  return (
    <FullCalendar
    events={data}
    plugins={[daygridPlugin, timegridPlugin, interactionPlugin]} 
    editable={true}
    selectable={true}  
    titleColor='#17a2b8' 
    eventColor='#17a2b8'
    dateClick={handleDateClick}
    />
  );
}

export default Calendar;
