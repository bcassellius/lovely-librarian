import './App.css';
import FullCalendar from '@fullcalendar/react';
import daygridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

function Calendar() {
  const handleDateClick = (dateClickInfo)=>{
    console.log(dateClickInfo.dateStr);
  }

  const data = [
    {
      title:"Give Dogs Flea Meds",
      start: "2021-10-01"
    },
    {
      title: "Finish Project",
      start: "2021-11-03"
    }
  ]
  return (
    <FullCalendar
      events={data}
      plugins={[daygridPlugin, interactionPlugin]} 
      dateClick={handleDateClick}
    />
  );
}

export default Calendar;
