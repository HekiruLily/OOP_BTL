import React from 'react';
import '../CSS/Rules.css';
import { useNavigate } from 'react-router-dom'; 

const Law = ({ onClose }) => {
  const navigate = useNavigate(); 

  const handleClose = () => {
    onClose(); 
  };

  const handleStart = () => {
    onClose(); 
    navigate('/choose'); 
  };

  return (
    <div className="modal show" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Game Rules:</h2>
        <p>The player must correctly guess a randomly generated secret number within a specified range (for example, from 1 to 100).</p>
        <h2>How to play:</h2>
        <p>The game will choose a random number that the player does not know. Players have a limited number of guesses (for example, 5). After each guess, the game will notify the player whether the number they guessed is too high, too low, or correct.</p>
        <h2>Score:</h2>
        <p>The fewer guesses, the higher the player's score. The player wins if he guesses the correct secret number within the range of guesses. If the player does not guess correctly within the guess limit, they will lose.</p>
        <h2>Tip:</h2>
        <p>Players should use strategies such as excluding guessed numbers and adjusting ranges based on feedback from the game.</p>
        <div className=" button-group">
          <button className="handleClose" onClick={handleClose}>Exit</button>
        </div> 
      </div>
    </div>
  );
};

export default Law;