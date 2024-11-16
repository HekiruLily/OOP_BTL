import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Home.css';
import Law from './Law';
import Rules from './Rules'; 

const Home = ({ isLoggedIn }) => { 
    const [showLaw, setShowLaw] = useState(false);
    const [showRules, setShowRules] = useState(false); 
    const [currentLevel, setCurrentLevel] = useState(0); 
    const navigate = useNavigate(); 

    const handleOpenLaw = (level) => {
        setCurrentLevel(level); 
        setShowLaw(true);
    };

    const handleCloseLaw = () => {
        setShowLaw(false);
    };

    const handleOpenRules = () => {
        setShowRules(true); 
    };

    const handleCloseRules = () => {
        setShowRules(false); 
    };

    return (
        <div className="Home">
            <div className="pattern"></div>
            <img src="./img/1.png" className="left-image" alt="1" /> 
            <div className="title">ADL</div>
            <div className="subtitle">Number Guessing Game</div>
            <img src="./img/9.png" className="right-image" alt="9" />
            <button className="play-button-1" onClick={() => handleOpenLaw(1)}>Level 1</button>
            <button className="play-button-1" onClick={() => handleOpenLaw(2)}>Level 2</button>
            <button className="play-button-1" onClick={() => handleOpenLaw(3)}>Level 3</button>
            <div className="info-card">
                <div className="card-title">Welcome to the Game!</div>
                <div className="card-content">Guess the number in as few attempts as possible. Good luck!</div>
            </div>
            <div className="icon-container">
                <span className="icon" onClick={handleOpenRules}><i className="bi bi-card-list"></i></span> 
                <span className="icon" onClick={handleOpenRules}><i className="bi bi-gear"></i></span> 
            </div>

            {showLaw && <Law onClose={handleCloseLaw} level={currentLevel} />} 
            {showRules && <Rules onClose={handleCloseRules} />} 
        </div>
    );
};

export default Home;