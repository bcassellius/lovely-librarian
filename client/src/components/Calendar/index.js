import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import daygridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timegridPlugin from '@fullcalendar/timegrid';

function Calendar() {
  const [title, setTitle] = useState ({
    title: "",
    date: ""
  })
  const handleDateClick = (dateClickInfo)=>{
    const eventTitle = prompt(`🚧 Under Construction 🚧
    You can't add new events just yet...
    
    ` 
    + `You clicked on `+ dateClickInfo.dateStr);
    console.log(eventTitle)
    setTitle({title: eventTitle, date: dateClickInfo.dateStr})
  }
  
  const data = [
    {
      title: 'Testing Events', //has colored background if time is not declared (all day event)
      start  : '2021-11-01T13:30:00', //Start time format is --> T hh : mm --> T12:30 (24h)
      allDay : false, //Makes the even show the start time  
      color: '#17a2b8', //changes the color of the dot --> '#e83e8c' would make a hot pink dot
    },
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
      title: "Staff Meeting",
      start: "2021-11-01T11:00",
      allDay: false,
      color: '#e83e8c',
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
      title: 'baby playdates and songs',
      start  : '2021-11-04T12:30:00',
      allDay : false
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
    {
      title: 'baby playdates and songs', 
      start  : '2021-11-11T12:30:00', 
      allDay : false,       
    },
    {
      title: 'baby playdates and songs',
      start  : '2021-11-18T12:30:00',
      allDay : false
    },
    {
      title: 'baby playdates and songs',
      start  : '2021-11-25T12:30:00',
      allDay : false
    },
    {
      title: 'baby playdates and songs',
      start  : '2021-12-02T12:30:00',
      allDay : false
    },
    {
      title: 'baby playdates and songs',
      start  : '2021-12-09T12:30:00',
      allDay : false
    },
    {
      title: 'baby playdates and songs',
      start  : '2021-12-16T12:30:00',
      allDay : false
    },
    {
      title: 'baby playdates and songs',
      start  : '2021-12-23T12:30:00',
      allDay : false
    },
    {
      title: 'baby playdates and songs',
      start  : '2021-12-30T12:30:00',
      allDay : false
    },
    {
      title: 'Dads and Donuts',
      start  : '2021-11-07T11:15:00',
      allDay : false
    },
    {
      title: 'Dads and Donuts',
      start  : '2021-11-21T11:15:00',
      allDay : false
    },
    {
      title: 'Moms and Macaroni',
      start  : '2021-11-14T11:15:00',
      allDay : false
    },
    {
      title: 'Moms and Macaroni',
      start  : '2021-11-28T11:15:00',
      allDay : false
    }
  ]
  return (
    <>
      <FullCalendar
        events={data}
        plugins={[daygridPlugin, timegridPlugin, interactionPlugin]}
        editable={true}
        selectable={true}
        eventColor='#17a2b8'
        dateClick={handleDateClick}
      />
    </>
  );
}

export default Calendar;
