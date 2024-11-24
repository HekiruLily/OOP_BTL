// App.js
import React, { useState } from 'react'; 
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from './Components/Home';
import Choose from './Components/Choose';
import Level from './Components/Level';
import Law from './Components/Law';
import Login from './Components/Login';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [idPlayer, setIdPlayer] = useState(null); // Thêm state để lưu idPlayer

  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setIdPlayer={setIdPlayer} />} />
          <Route path="/home" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} setIdPlayer={setIdPlayer} />} />
          <Route path="/law" element={<Law />} />
          <Route path="/choose" element={<Choose />} />
          <Route 
            path="/level/:levelNumber" 
            element={<LevelWrapper idPlayer={idPlayer} />} // Truyền idPlayer vào đây
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

// Tạo một component wrapper để xử lý params
const LevelWrapper = ({ idPlayer }) => {
  const { levelNumber } = useParams();
  return <Level level={parseInt(levelNumber)} idPlayer={idPlayer} />; // Truyền idPlayer vào Level
};

export default App;