import React from "react";

const Dropdown = ({ text, dropdownItems }) => {
    // console.log(dropdownItems);

  return (
    <div className="dropdown-wrap">
      <a href="#" className="dropbtn">
        {text}
      </a>
      <div className="dropdown-content">
        {dropdownItems.map((item,index)=>(
            <a href="#" key={index}>
                {item}
            </a>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
