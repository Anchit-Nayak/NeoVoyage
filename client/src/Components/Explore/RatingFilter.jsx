import React, { useState } from 'react';

const RatingFilter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
  
    const toggleDropdown = () => {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    };
  
    const selectOption = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
    };
  
    const options = ["None", "High To Low", "Low To High"];
  
    return (
      <div className="filter-container w-auto bg-gray-700 mb-4 hover:bg-gray-600 rounded-lg p-2 px-4 font-thin border border-gray-600" onClick={toggleDropdown}>
        <button className="filter-button text-white flex flex-row gap-3 py-2">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
            </svg>
          )} Search By Rating
        </button>
        {isOpen && (
          <ul className="filter-options text-white max-w-md divide-y divide-gray-700">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => selectOption(option)}
                className={`${selectedOption === option ? 'selected' : ''} px-3 py-3 sm:pb-4 hover:bg-gray-900 rounded-lg`}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
}

export default RatingFilter