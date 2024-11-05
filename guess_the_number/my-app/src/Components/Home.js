import React from 'react';
import { Link } from 'react-router-dom'; 
import '../CSS/Home.css';
const Home = () => { 
    return (
        <div className="Home">
            <div className="pattern"></div>
            <img src="./img/1.jpg" className="left-image" alt="1" />
            <div className="title">ADL</div>
            <div className="subtitle">Number Guessing Game</div>
            <Link to="/choose"> 
                <button className="play-button-1">Play</button>
            </Link>
            <div className="icons-left">
                <span className="icon"><i className="bi bi-cart4"></i></span>
                <span className="icon"><i className="bi bi-gear"></i></span>
                <span className="icon"><i className="bi bi-share-fill"></i></span>
            </div>
            <div className="icons-right">
                <span className="icon"><i className="bi bi-bookmark-fill"></i></span>
                <span className="icon"><i className="bi bi-envelope-fill"></i></span>
                <span className="icon"><i className="bi bi-card-list"></i></span>
            </div>
            <div className="info-card">
                <div className="card-title">Welcome to the Game!</div>
                <div className="card-content">Guess the number in as few attempts as possible. Good luck!</div>
            </div>
            
        </div>
    );
};

export default Home;
