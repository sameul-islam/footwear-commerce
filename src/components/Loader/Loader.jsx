import React from 'react';
import './loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}

export default Loader;
