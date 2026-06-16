export const baseUrl = "http://localhost:3002";

export function getEvents() {
  return fetch("http://localhost:3002/events")
    .then((res) => res.json());
}

export function addEvent(event) {
  return fetch("http://localhost:3002/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  }).then((res) => res.json());
}