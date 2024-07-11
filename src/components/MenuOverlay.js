import React from 'react';

const MenuOverlay = ({ isOpen, onClose }) => {
  return (
    <div className={`menu-overlay ${isOpen ? 'open' : ''}`}>
      <div className="menu-column">
        <div className="menu-item">Projects</div>
        <div className="menu-item">About</div>
        <div className="menu-item">Skills</div>
        <div className="menu-item">Experience</div>
      </div>
      <div className="menu-column">
        <div className="menu-item">Email</div>
        <div className="menu-item">LinkedIn</div>
        <div className="menu-item">GitHub</div>
        <div className="menu-item">Twitter</div>
      </div>
      <button className="close-button" onClick={onClose}>Close</button>
    </div>
  );
};

export default MenuOverlay;