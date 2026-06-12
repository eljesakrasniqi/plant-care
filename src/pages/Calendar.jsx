import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Sidebar from "../components/Sidebar";

function Calendar() {
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
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
            ]}
            initialView="dayGridMonth"
            height="auto"
            headerToolbar={{
              left: "prev,next",
              center: "title",
              right: "dayGridMonth,timeGridWeek,listMonth",
            }}
            buttonText={{
              dayGridMonth: "Month",
              timeGridWeek: "Week",
              listMonth: "List",
            }}
            events={[
              {
                title: "Water Monstera",
                date: "2024-05-01",
              },
              {
                title: "Water Peace Lily",
                date: "2024-05-10",
              },
              {
                title: "Water Fiddle Leaf Fig",
                date: "2024-05-23",
              },
              {
                title: "Repot Aloe Vera",
                date: "2024-06-15",
              },
            ]}
          />
        </div>
      </main>
    </div>
  );
}

export default Calendar;