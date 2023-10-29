import React from "react";
import "./BtnDropdown.css";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import SelectedOption from "./SelectedOption";

const BtnDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const options = ["Quan", "Ao", "Vest"];

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="btn-dropdown-container">
      <h2>Button Dropdown</h2>

      <SelectedOption selectedOption={selectedOption}/>

      <div className="button-dropdown">
        <button onClick={handleDropdownToggle}>Select Option</button>
        {dropdownOpen && <DropdownMenu options={options} setDropdownOpen={setDropdownOpen} setSelectedOption={setSelectedOption}/>}
      </div>

    </div>
  );
};

export default BtnDropdown;
