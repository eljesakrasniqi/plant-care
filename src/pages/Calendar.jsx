import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Sidebar from "../components/Sidebar";
import { addEvent, getEvents } from "../services/events";

function Calendar() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getEvents().then((data) => {
      setEvents(data);
    });
  }, []);
  const handleDateClick = (info) => {
    const title = prompt("Write your event title?");
    if (!title) return;

    const newEvent = {
      title,
      date: info.dateStr,
    };

    addEvent(newEvent).then((saved) => {
      setEvents((prev) => [...prev, saved]);
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 bg-white px-8 py-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Calendar
        </h1>

        <p className="text-gray-500 mt-1 mb-6">
          View your plant care schedule.
        </p>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            height="auto"
            selectable={true}
            dateClick={handleDateClick}
            headerToolbar={{
              left: "prev,next",
              center: "title",
              right: "dayGridMonth,timeGridWeek,listMonth",
            }}
            events={events}
          />
        </div>
      </main>
    </div>
  );
}

export default Calendar;