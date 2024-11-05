import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Choose.css';

const Choose = () => {
  const levels = [
    { titleID: 'Level 1', imgSrc: './img/125.PNG', stars: 2 },
    { titleID: 'Level 2', imgSrc: './img/123.PNG', stars: 4 },
    { titleID: 'Level 3', imgSrc: './img/bo-hoa-hong-tim-dep-nhat-the-gioi_110855483.jpg', stars: 6 },
  ];

  const [currentLevel, setCurrentLevel] = useState(0);
  const navigate = useNavigate();
  const showPanel = (level) => setCurrentLevel(level);

  return (
    <div className="Choose">
      <div className="cube-transition">
        {levels.map((level, index) => (
          <div key={index} className={`level-panel ${index === currentLevel ? 'active' : ''}`}>
            <h2 className="h2">{level.titleID}</h2>
            <img src={level.imgSrc} className="level-image" />
            <div className="stars">
              {Array.from({ length: 6 }, (_, i) => (
                <span key={i}>{i < level.stars ? '★' : '☆'}</span>
              ))}
            </div>

            <button className="start-btn" onClick={() => navigate(`/level/${index + 1}`)}>START</button>
            <div className="switch">
              <button className="back-level" onClick={() => showPanel((currentLevel - 1 + levels.length) % levels.length)}>Back</button>
              <button className="next-level" onClick={() => showPanel((currentLevel + 1) % levels.length)}>Next</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
