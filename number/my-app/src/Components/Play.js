import React, { useState, useEffect } from 'react';

const Play = () => {
  const [remainingTime, setRemainingTime] = useState(60); 
  const [attemptsLeft, setAttemptsLeft] = useState(10); 
  const [guessedNumbers, setGuessedNumbers] = useState([]); 
  const [currentGuess, setCurrentGuess] = useState(''); 

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

    if (attemptsLeft > 0 && remainingTime > 0 && !isNaN(number)) {
      setGuessedNumbers((prevGuesses) => [...prevGuesses, number]);
      setAttemptsLeft((prevAttempts) => prevAttempts - 1);
      setCurrentGuess(''); 
    }
  };

  return (
    <div>
      <div className="info-panel">
        <h3>Thông tin trò chơi</h3>
        <p>Thời gian còn lại: {remainingTime} giây</p>
        <p>Số đã đoán: {guessedNumbers.join(', ')}</p>
      </div>
      

    </div>
  );
};

export default Play;