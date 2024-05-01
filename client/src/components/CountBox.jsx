import React from 'react';

const CountBox = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center w-[150px]">
      {/* Displaying the value */}
      <h4 className="font-epilogue font-bold text-[30px] text-black dark:text-white p-3 bg-white dark:bg-[#1c1c24] rounded-t-[10px] w-full text-center truncate">
        {value}
      </h4>
      {/* Displaying the title */}
      <p className="font-epilogue font-normal text-[16px] text-gray-800 dark:text-[#808191] bg-gray-200 dark:bg-[#28282e] px-3 py-2 w-full rouned-b-[10px] text-center">
        {title}
      </p>
    </div>
  );
};

export default CountBox;
