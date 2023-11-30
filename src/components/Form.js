import React, { useState } from "react";
import "./Form.css";

const EventForm = ({ setDataArr }) => {
  const [eventData, setEventData] = useState({
    eventName: "",
    startTime: "",
    endTime: "",
    location: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataArr((arr) => [...arr, eventData]);
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <label htmlFor="eventName">Event Name</label>
      <input
        type="text"
        id="eventName"
        name="eventName"
        value={eventData.eventName}
        onChange={handleChange}
        required
      />

      <label htmlFor="startTime">Start Time</label>
      <input
        type="datetime-local"
        id="startTime"
        name="startTime"
        value={eventData.startTime}
        onChange={handleChange}
        required
      />

      <label htmlFor="endTime">End Time</label>
      <input
        type="datetime-local"
        id="endTime"
        name="endTime"
        value={eventData.endTime}
        onChange={handleChange}
        required
      />

      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        name="location"
        value={eventData.location}
        onChange={handleChange}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default EventForm;
