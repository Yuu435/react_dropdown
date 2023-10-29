import React, { useState } from "react";

const DropdownMenu = ({ options, setDropdownOpen, setSelectedOption, setShowModal, setModalContent }) => {


  const handleSelectedOption = (item) => {
    // Sự kiện btn dropdown
    setSelectedOption(item);
    setDropdownOpen(false);
    // Sự kiện modal
    setShowModal(true);
    setModalContent(`Đây là: ${item}`)
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
