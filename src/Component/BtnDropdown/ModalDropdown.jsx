import React from "react";

const ModalDropdown = ({ showModal, setShowModal, modalContent }) => {
  return (
    showModal && (
      <div className="modal">
        <div className="modal-content">
          <span className="modal-close" onClick={() => setShowModal(false)}>
            x
          </span>
          <p>{modalContent}</p>
        </div>
      </div>
    )
  );
};

export default ModalDropdown;
