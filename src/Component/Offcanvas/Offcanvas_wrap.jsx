import React from "react";

const Offcanvas_wrap = ({setShowOffcanvas}) => {
  return (
    <div className="offcanvas-wrap" >
      <div className="offcanvas">
        <div className="offcanvas-header">
          <h2>Offcanvas</h2>
          <span className="offcanvas-close" onClick={()=>setShowOffcanvas(false)}>x</span>
        </div>

        <div className="offcanvas-body">
          <p>
            Some text as placeholder. In real life you can have the elements
            youhave chosen. Like, text, images, lists, etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offcanvas_wrap;
