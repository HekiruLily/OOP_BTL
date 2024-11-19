import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Level.css';
import Play from './Play';
import End from './End';

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
    const [remainingTime, setRemainingTime] = useState(60); 

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
            setRemainingAttempts((prev) => prev - 1);
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

    const calculateScore = () => {
        return 100 - (levels[level - 1].attempts - remainingAttempts) * 10;
    };

    const levelConfig = [
        { time: 60 },
        { time: 45 },
        { time: 30 }
    ];

    const time = levelConfig[level - 1].time;
   
    const handleRestart = () => {
        setAnswer(Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
        setRemainingAttempts(levels[level - 1].attempts);
        setFeedback('');
        setGuess('');
        setGameOver(false);
        setGuessedCorrectly(false);
        setIsGameEnded(false);
        setRemainingTime(levelConfig[level - 1].time); 
    };

    const handleExitClick = () => {
        const userConfirmed = window.confirm("Are you sure with this decision?");
        
        if (userConfirmed) {
            navigate('/home'); 
        } else {
            console.log("No escape");
        }
    };
    
    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    setGameOver(true);
                    setIsGameEnded(true); 
                    setFeedback('⏱️ Time is up! Game Over!');
                    return 0; 
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer); 
    }, []);
 
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
                <p className={feedback.includes('high') ? 'tooHigh' : feedback.includes('low') ? 'tooLow' : 'feedback-error'}>
                    {feedback}
                </p>
                <p className={`attempts-left ${remainingAttempts === 0 ? "attempts-left" : ""}`}>
                    Attempts Left: <span>{remainingAttempts}</span>
                </p>
                <img src={levels[level - 1].image} alt={`Level ${level}`} />
                <div className="button-group">
                    <button onClick={handleExitClick} className="exit-btn">Exit</button>
                    <button onClick={handleRestart} className="hidden">Restart Game</button>
                </div>
            </div>
            <div className="play-container">
                <Play remainingTime={remainingTime} attemptsLeft={remainingAttempts} /> 
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
