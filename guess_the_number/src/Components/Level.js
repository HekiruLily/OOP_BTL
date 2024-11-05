import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Level.css';

const levels = [
    { attempts: 7, image: '/img/4.jpg',},
    { attempts: 5, image: '/img/3.jpg', },
    { attempts: 3, image: '/img/5.jpg', }
  ];

const Level = ({ level }) => {
    const minNum = 1;
    const maxNum = 100;
    const [answer, setAnswer] = useState(Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
    const [remainingAttempts, setRemainingAttempts] = useState(levels[level - 1].attempts);
    const [feedback, setFeedback] = useState('');
    const [guess, setGuess] = useState('');
    const [gameOver, setGameOver] = useState(false);
    const [guessedCorrectly, setGuessedCorrectly] = useState(false);

    const handleGuess = () => {
        const guessNumber = Number(guess);
        if (!guessNumber || guessNumber < minNum || guessNumber > maxNum) {
            setFeedback('Please enter a valid number between 1 and 100.');
            return;
        }

        if (guessNumber === answer) {
            setFeedback('🎉 Congratulations! You guessed the correct number!');
            setGuessedCorrectly(true); 
            setGameOver(true);
        } else {
            setRemainingAttempts(prev => prev - 1);
            if (remainingAttempts - 1 === 0) {
                setFeedback(`😞 Game Over! The number was ${answer}.`);
                setGameOver(true);
            } else {
                setFeedback(guessNumber > answer ? ' 📉 too-high' : '📈 too-low');
            }
        }
        setGuess('');
    };

    const handleRestart = () => {
        setAnswer(Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
        setRemainingAttempts(levels[level - 1].attempts);
        setFeedback('');
        setGuess('');
        setGameOver(false);
        setGuessedCorrectly(false); 
    };

    const handleExit = () => {
        window.location.href = '/choose';
    };

    return (
        <div className="level-panel active">
            <h2 className={guessedCorrectly ? "level-heading-success" : "level-heading"}> Level {level}</h2>
            <input type="number" value={guess} onChange={(e) => setGuess(e.target.value)} placeholder="Enter your guess" disabled={gameOver} />
            <button onClick={handleGuess} disabled={gameOver}>Guess</button>
            <p className={feedback.includes("Game Over") ? "feedback-error" : guessedCorrectly ? "feedback-success" : feedback}> {feedback} </p>
            <p className={`attempts-left ${remainingAttempts === 0 ? "attempts-left" : ""}`}> Attempts Left: <span>{remainingAttempts}</span> </p>
            <img src={levels[level - 1].image} alt={`Level ${level}`} />
            <button onClick={handleRestart} className="hidden">Restart Game</button>
            <button onClick={handleExit} className="exit-btn">Exit</button>
        </div>
    );
};

export default Level;