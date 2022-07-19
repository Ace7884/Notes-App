import React from "react";
import "./NoteDate.css";

export const NoteDate = ({ date, hour }) => {
  return (
    <div className="NoteDate">
      <span>{date}</span>
      <span>{hour}</span>
    </div>
  );
};
