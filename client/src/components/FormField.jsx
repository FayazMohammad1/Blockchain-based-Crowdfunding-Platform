import React from 'react';

/**
 * FormField component renders a label and an input field or a textarea.
 * @param {string} labelName - The label for the input field.
 * @param {string} placeholder - The placeholder text for the input field or textarea.
 * @param {string} inputType - The type of the input field (e.g., text, number, email).
 * @param {boolean} isTextArea - Indicates whether the input is a textarea or not.
 * @param {string} value - The value of the input field or textarea.
 * @param {function} handleChange - The function to handle input changes.
 */
const FormField = ({ labelName, placeholder, inputType, isTextArea, value, handleChange }) => {
  return (
    <label className="flex-1 w-full flex flex-col">
      {labelName && (
        <span className="font-epilogue font-medium text-[14px] leading-[22px] text-black dark:text-[#808191] mb-[10px]">{labelName}</span>
      )}
      {isTextArea ? (
        <textarea 
          required
          value={value}
          onChange={handleChange}
          rows={10}
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-black dark:text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
        />
      ) : (
        <input 
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          step="0.1"
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-black dark:text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
        />
      )}
    </label>
  );
}

export default FormField;
