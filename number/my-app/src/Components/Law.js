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
    1: { attempts: 10, time: '60 phút' },
    2: { attempts: 7, time: '45 phút' },
    3: { attempts: 5, time: '30 phút' },
  };

  return (
    <div className="modal show" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{`Level ${level}`}</h2>
        <p>Trong level này, bạn sẽ có:</p>
        <ul>
          <li>Số lượt chơi: {levelInfo[level].attempts}</li>
          <li>Thời gian: {levelInfo[level].time}</li>
          <li>Cách tính điểm:</li>
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
