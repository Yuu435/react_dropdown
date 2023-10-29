import React, { useState } from "react";

const DropdownMenu = ({ options, setDropdownOpen, setSelectedOption }) => {
//   const [selectedOption, setSelectedOption] = useState("");

  const handleSelectedOption = (item) => {
    setSelectedOption(item);
    setDropdownOpen(false);
  };
  return (
    <div className="dropdown-menu">
      {options.map((item, index) => (
        <a
          key={index}
          onClick={() => {
            handleSelectedOption(item);
          }}
          href="#"
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default DropdownMenu;
