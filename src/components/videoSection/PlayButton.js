import React from "react";
const PlayButton = ({ className }) => {
  return (
    <svg
      className={className}
      width="74"
      height="74"
      viewBox="0 0 74 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M52 37L29.5 49.9904L29.5 24.0096L52 37Z" fill="white" />
      <circle cx="37" cy="37" r="35" stroke="white" strokeWidth="4" />
    </svg>
  );
};

export default PlayButton;
