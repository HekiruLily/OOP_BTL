import React, { useState, useEffect } from 'react';

const Play = ({ remainingTime, attemptsLeft }) => {
  const [time, setRemainingTime] = useState(remainingTime); 
  const [attempts, setAttemptsLeft] = useState(attemptsLeft); 
  const [guessedNumbers, setGuessedNumbers] = useState([]); 
  const [currentGuess, setCurrentGuess] = useState(''); 

  useEffect(() => {
    setRemainingTime(remainingTime); // Cập nhật thời gian khi props thay đổi
  }, [remainingTime]);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0; 
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  const handleGuess = () => {
    const number = parseInt(currentGuess); // Chuyển đổi giá trị nhập thành số

    if (attempts > 0 && time > 0 && !isNaN(number)) {
      setGuessedNumbers((prevGuesses) => [...prevGuesses, number]);
      setAttemptsLeft((prevAttempts) => prevAttempts - 1);
      setCurrentGuess(''); 
    }
  };

  return (
    <div>
      <div className="info-panel">
        <h3>Game information</h3>
        <p>Time remaining: {time} second</p>
        <p>
        Guessed number: {guessedNumbers.join(', ')}</p>
      </div>
    </div>
  );
};

export default Play;
