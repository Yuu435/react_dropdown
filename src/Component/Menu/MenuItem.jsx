import React from "react";
import Dropdown from "./Dropdown";

const MenuItem = ({ text, dropdownItems }) => {
  //   console.log(text);
  
  return (
    <li className={dropdownItems ? "dropdown" : ""}>
      {dropdownItems ? (
        <Dropdown text={text} dropdownItems={dropdownItems} />
      ) : (
        <a href="#">{text}</a>
      )}
    </li>
  );
};

export default MenuItem;
