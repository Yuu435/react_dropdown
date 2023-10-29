import React from "react";
import MenuItem from "./MenuItem";

const Menu = () => {
  const dropdownItems = ["Quan", "Ao", "Vest"];

  return (
    <div className="menu">
      <ul>
        <MenuItem text="Home" />
        <MenuItem text="About" />
        <MenuItem text="Services" dropdownItems={dropdownItems} />
        <MenuItem text="Contact" />
      </ul>
    </div>
  );
};

export default Menu;
