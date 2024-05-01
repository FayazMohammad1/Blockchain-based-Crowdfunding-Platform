
import React, { useState } from "react";

const Accordian = ({ title, answer }) => {
  // State to manage accordion open/close
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-4">
      {/* Button to toggle accordion */}
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span>{title}</span>
        {/* Arrow icon indicating accordion state */}
        <svg
          className="fill-indigo-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Horizontal line */}
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          {/* Vertical line, rotated to form a plus or minus sign */}
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      {/* Content to be shown or hidden */}
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-500 text-md font-normal mt-2 ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default Accordian;
