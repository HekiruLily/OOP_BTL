import React, { useEffect } from 'react';
import '../CSS/End.css'; 

const End = ({ score, attempts, guessedCorrectly, answer, elapsedTime, onClose }) => {
  return (
    <div className="modal show" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{guessedCorrectly ? "You Won!" : "Game Over"}</h2>
        <p>Your Score: {score}</p>
        <p>Time Played: {elapsedTime} seconds</p>
        <button onClick={onClose} className="close-button" style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}>
          Close
        </button>
      </div>
    </div>
  );
};

export default End;
