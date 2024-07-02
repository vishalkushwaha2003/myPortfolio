import React, { useState } from 'react';

const InputComponent = ({myPlaceholder}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (inputValue === '') {
      setIsFocused(false);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="relative  w-[90%] ">
      <input
        type="text"
        id="input"
        required
        value={inputValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder={isFocused || inputValue?'':myPlaceholder}
        className="w-full hover:cursor-text bg-[rgba(170,163,163,0.05)] border-none border-b-2 border-gray-300  p-1.5  outline-none focus:border-gray-800 text-[rgb(251,185,182)] text-md"
      />
      <label
        htmlFor="input"
        className={`absolute left-0 transition-all duration-300 ease-in-out ${
          isFocused || inputValue ? '-top-5 text-sm text-[rgb(251,185,182)]' : 'top-1 text-sm text-gray-400/20'
        }`}
      >
        {isFocused || inputValue ? myPlaceholder:'' }
      </label>
      <div
        className={`absolute left-0 bottom-0 h-[1px] w-full bg-[rgb(251,185,182)] transition-transform duration-300 ease-in-out ${
          isFocused || inputValue ? 'scale-x-100' : 'scale-x-0'
        }`}
      ></div>
    </div>
  );
};

export default InputComponent;
