import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Level.css';
import Play from './Play';
import End from './End'; // Import the End component

const levels = [
    { attempts: 10, image: '/img/4.jpg' },
    { attempts: 7, image: '/img/3.jpg' },
    { attempts: 5, image: '/img/5.jpg' }
];

const Level = ({ level }) => {
    const navigate = useNavigate();
    const minNum = 1;
    const maxNum = 100;
    const [answer, setAnswer] = useState(Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
    const [remainingAttempts, setRemainingAttempts] = useState(levels[level - 1].attempts);
    const [feedback, setFeedback] = useState('');
    const [guess, setGuess] = useState('');
    const [gameOver, setGameOver] = useState(false);
    const [guessedCorrectly, setGuessedCorrectly] = useState(false);
    const [isGameEnded, setIsGameEnded] = useState(false);

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
            setIsGameEnded(true);
        } else {
            setRemainingAttempts(prev => prev - 1);
            if (remainingAttempts - 1 === 0) {
                setFeedback(`😞 Game Over! The number was ${answer}.`);
                setGameOver(true);
                setIsGameEnded(true);
            } else {
                setFeedback(guessNumber > answer ? '📉 Too high' : '📈 Too low');
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
        setIsGameEnded(false);
    };

    const handleExit = () => {
        navigate('/home');
    };

    const calculateScore = () => {
        return 100 - (levels[level - 1].attempts - remainingAttempts) * 10;
    };

    return (
        <div className="level-container">
            <div className="level-panel active">
                <h2 className={guessedCorrectly ? "level-heading-success" : "level-heading"}> Level {level} </h2>
                <div className="guess-container">
                    <input 
                        type="number" 
                        value={guess} 
                        onChange={(e) => setGuess(e.target.value)} 
                        placeholder="Enter your guess" 
                        disabled={gameOver} 
                    />
                    <button onClick={handleGuess} disabled={gameOver}>Guess</button>
                </div>
                <p className={feedback.includes("too-high") ? "too-high" : feedback.includes("too-low") ? "too-low" : (feedback.includes("Please enter a valid number") ? "feedback-error" : (feedback.includes("Game Over") ? "feedback-error" : guessedCorrectly ? "feedback-success" : ""))}>
                    {feedback}
                </p>
                <p className={`attempts-left ${remainingAttempts === 0 ? "attempts-left" : ""}`}>
                    Attempts Left: <span>{remainingAttempts}</span>
                </p>
                <img src={levels[level - 1].image} alt={`Level ${level}`} />
                <div className="button-group">
                    <button onClick={handleExit} className="exit-btn">Exit</button>
                    <button onClick={handleRestart} className="hidden">Restart Game</button>
                </div>
            </div>
            <div className="play-container">
                <Play />
            </div>
            {isGameEnded && (
                <End 
                    score={calculateScore()} 
                    attempts={levels[level - 1].attempts - remainingAttempts} 
                    guessedCorrectly={guessedCorrectly} 
                    answer={answer} 
                    onClose={handleRestart} 
                />
            )}
        </div>
    );
};
export default Level;
