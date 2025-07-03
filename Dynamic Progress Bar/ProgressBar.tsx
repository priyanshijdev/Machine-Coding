import React, { useState } from "react";

export const Progressbar = ({ value = 0 }) => {
  return (
    <div className="progress">
      <span>{value.toFixed()}%</span>
      <div style={{ width: `${value}%` }} className="progressNumber" />
    </div>
  );
};
