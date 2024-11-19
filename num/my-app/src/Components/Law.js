import React, { useEffect } from 'react';
import '../CSS/Law.css';
import { useNavigate } from 'react-router-dom';

const Law = ({ onClose, level }) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  const handleClose = () => {
    onClose();
  };

  const handleStart = () => {
    onClose();
    navigate(`/level/${level}`);
  };

  const levelInfo = {
    1: { attempts: 10, time: '60 giây' },
    2: { attempts: 7, time: '45 giây' },
    3: { attempts: 5, time: '30 giây' },
  };

  return (
    <div className="modal show" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{`Level ${level}`}</h2>
        <p>In this level, you will have:</p>
        <ul>
          <li>Number of plays: {levelInfo[level].attempts}</li>
          <li>Time: {levelInfo[level].time}</li>
        </ul>
        <div className="button-group">
          <button className="handleClose" onClick={handleClose}>Exit</button>
          <button className="handleStart" onClick={handleStart}>Start</button>
        </div>
      </div>
    </div>
  );
};

export default Law;
