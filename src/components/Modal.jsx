import React from "react";

const Modal = ({ isOpen, setIsOpen }) => {
  const handleCancel = (e) => {
    // Close only if clicking directly on the container, not inside the modal
    if (e.target.classList.contains("container")) {
      setIsOpen(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="container" onClick={handleCancel}>
      <div className="modal">
        <h2>This is Modal</h2>

        <button className="close-btn" onClick={() => setIsOpen(false)}>
          X
        </button>

        <p>This is the modal description.</p>

        <div className="btns">
          <button className="green">Submit</button>
          <button className="red" onClick={() => setIsOpen(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
