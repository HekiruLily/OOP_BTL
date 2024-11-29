import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Level.css";
import End from "./End";

import axios from 'axios';

const levels = [
  { attempts: 10, image: "/img/4.jpg", answer: Math.floor(Math.random() * 100) + 1, timeLimit: 60 },  
  { attempts: 7, image: "/img/3.jpg", answer: Math.floor(Math.random() * 100) + 1, timeLimit: 45 },   
  { attempts: 5, image: "/img/5.jpg", answer: Math.floor(Math.random() * 100) + 1, timeLimit: 30 }   
];

const Level = ({ level, idPlayer }) => {
  const navigate = useNavigate();
  const minNum = 1;
  const maxNum = 100;
  const [answer, setAnswer] = useState(levels[level - 1].answer);
  const [remainingAttempts, setRemainingAttempts] = useState(levels[level - 1].attempts);
  const [feedback, setFeedback] = useState("");
  const [guess, setGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [guessedCorrectly, setGuessedCorrectly] = useState(false);
  const [guessedNumbers, setGuessedNumbers] = useState([]);
  const [remainingTime, setRemainingTime] = useState(levels[level - 1].timeLimit);  
  const [startTime, setStartTime] = useState(null); 
  const [elapsedTime, setElapsedTime] = useState(0); 


  const handleGuess = () => {
    const guessNumber = Number(guess);
    if (!guessNumber || guessNumber < minNum || guessNumber > maxNum) {
      setFeedback("Please enter a valid number between 1 and 100.");
      return;
    }

    setGuessedNumbers((prevGuesses) => [...prevGuesses, guessNumber]);

    if (guessNumber === answer) {
      setGuessedCorrectly(true);
      setGameOver(true);
    } else {
      setRemainingAttempts((prev) => prev - 1);
      if (remainingAttempts - 1 === 0) {
        setGameOver(true);
      } else {
        setFeedback(guessNumber > answer ? "📉 Too high" : "📈 Too low");
      }
    }
    setGuess("");
  };

  const calculateScore = () => {
    if (guessedCorrectly) {
        return 100 - (levels[level - 1].attempts - remainingAttempts) * 10;
    }
    return 0; 
};

  useEffect(() => {
    if (!startTime) {
      setStartTime(Date.now()); 
    }

    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setGameOver(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime]);

  const sendGameHistoryToBackend = async (result, score, elapsedTime) => {
    const gameHistory = {
      idPlayer: idPlayer,
      level: level,
      numberToGuess: answer,
      timePlayed: elapsedTime,
      attempted: levels[level - 1].attempts - remainingAttempts, 
      result: result,
      score: score,
    };

    try {
      const response = await axios.post('http://localhost:8080/api/gameHistories', gameHistory);
      console.log('Game history saved:', response.data);
    } catch (error) {
      console.error('Error saving game history:', error);
    }
  };

  const handleGameOver = () => {
    const score = calculateScore(); 
    const timePlayed = elapsedTime; 
    sendGameHistoryToBackend(guessedCorrectly, score, timePlayed); 
};

  useEffect(() => {
    if (gameOver) {
      handleGameOver(); 
    }
  }, [gameOver]);

  useEffect(() => {
    if (gameOver) {
        setRemainingTime(0);
        const endTime = Date.now();
        setElapsedTime(Math.floor((endTime - startTime) / 1000)); 

        
        if (remainingAttempts === 0 || remainingTime === 0) {
            sendGameHistoryToBackend(false, 0); 
        }
    }
}, [gameOver, startTime]);

  const showEndModal = gameOver; 

  const handleCloseModal = () => {
    navigate("/home"); 
  };
  return (
    <div className="level-container">
      <div className="left">
        <div className="info-box total-attempts">
          <p>Total Attempts: {levels[level - 1].attempts}</p>
        </div>
        <div className="info-box remaining-attempts">
          <p>Remaining Attempts: {remainingAttempts}</p>
        </div>
      </div>
      
      <div className="level-panel active">
        <h2 className={guessedCorrectly ? "level-heading-success" : "level-heading"}>
          Level {level}
        </h2>
        <div className="guess-container">
          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="Enter your guess"
            disabled={gameOver}
          />
        </div>
        <p
  className={`feedback ${feedback.includes("Too high") ? "tooHigh" : ""} 
                ${feedback.includes("Too low") ? "tooLow" : ""} 
                ${feedback === "Please enter a valid number between 1 and 100." ? "feedback-error" : ""}
  `}
>
  {feedback}
</p>

        <img src={levels[level - 1].image} alt={`Level ${level}`} />
        <button onClick={handleGuess} disabled={gameOver}>Guess</button>
      </div>

      <div className="right">
        <div className="info-box remaining-time">
          <p>Time Remaining: {remainingTime} seconds</p>
        </div>

        <div className="info-box guessed-numbers">
          <p>Guessed Numbers: {guessedNumbers.join(", ")}</p>
        </div>
      </div>

      {showEndModal && ( 
        <End
          score={calculateScore()}
          attempts={levels[level - 1].attempts - remainingAttempts}
          guessedCorrectly={guessedCorrectly}
          answer={answer}
          elapsedTime={elapsedTime}
          onClose={handleCloseModal}
        />
      )}*-
    </div>
  );
};

export default Level;
