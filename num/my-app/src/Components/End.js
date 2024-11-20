import React from 'react';
import '../CSS/End.css'; 

const End = ({ score, attempts, guessedCorrectly, answer, onClose }) => {
    return (
        <div className="modal show" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Game Over</h2>
                {guessedCorrectly ? (
                    <p>🎉 Congratulations! You guessed the correct number!</p>
                ) : (
                    <p>😞 Game Over! The number was {answer}.</p> 
                )}
                <p>Your Score: {score}</p>
                <p>Attempts Used: {attempts}</p>
                <button onClick={onClose} style={{ backgroundColor: 'red', color: 'white', padding: '5px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}>Close</button>
            </div>
        </div>
    );
};

export default End;

