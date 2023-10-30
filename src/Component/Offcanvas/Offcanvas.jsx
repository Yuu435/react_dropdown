import React, { useState } from "react";
import "./Offcanvas.css";
import Offcanvas_wrap from "./Offcanvas_wrap";

const Offcanvas = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };
  return (
    <div className="offcanvas-container">
      <button onClick={handleOffcanvasToggle}>Button Offcanvas</button>
      {showOffcanvas && 
        <Offcanvas_wrap setShowOffcanvas={setShowOffcanvas}/>
      }
    </div>
  );
};

export default Offcanvas;
