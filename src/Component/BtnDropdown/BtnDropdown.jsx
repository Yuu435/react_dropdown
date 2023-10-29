import React from "react";
import "./BtnDropdown.css";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import SelectedOption from "./SelectedOption";
import ModalDropdown from "./ModalDropdown";

const BtnDropdown = () => {
  // Sự kiện btn dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  // Sự kiện modal
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const options = ["Quan", "Ao", "Vest"];

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="btn-dropdown-container">
      <h2>Button Dropdown</h2>
      {/* Hiển thị option được chọn */}
      <SelectedOption selectedOption={selectedOption} />

      {/* button dropdown */}
      <div className="button-dropdown">
        <button onClick={handleDropdownToggle}>Select Option</button>
        {dropdownOpen && (
          <DropdownMenu
            options={options}
            // Sự kiện btn dropdown
            setDropdownOpen={setDropdownOpen}
            setSelectedOption={setSelectedOption}
            // Sự kiện modal
            setShowModal={setShowModal}
            setModalContent={setModalContent}
          />
        )}
      </div>

      {/* Modal */}
      <ModalDropdown showModal={showModal} modalContent={modalContent} setShowModal={setShowModal}/>
    </div>
  );
};

export default BtnDropdown;
