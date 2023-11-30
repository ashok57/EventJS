import React from "react";
import "./Card.css";

const Event = ({ eventName, startTime, endTime, location }) => {
  return (
    <div className="event">
      <h2>{eventName}</h2>
      <p>Start Time: {startTime}</p>
      <p>End Time: {endTime}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default Event;
