// App.js
import React, { useState } from 'react'; 
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from './Components/Home';
import Choose from './Components/Choose';
import Level from './Components/Level';
import Law from './Components/Law';
import Login from './Components/Login';
import History from './Components/History';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [idPlayer, setIdPlayer] = useState(null); 

  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setIdPlayer={setIdPlayer} />} />
          <Route path="/home" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} setIdPlayer={setIdPlayer} />} />
          <Route path="/law" element={<Law />} />
          <Route path="/choose" element={<Choose />} />
          <Route path="/history" element={<History />} />
          <Route 
            path="/level/:levelNumber" 
            element={<LevelWrapper idPlayer={idPlayer} />} 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};


const LevelWrapper = ({ idPlayer }) => {
  const { levelNumber } = useParams();
  return <Level level={parseInt(levelNumber)} idPlayer={idPlayer} />; 
};

export default App;