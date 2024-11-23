import React, { useState } from 'react'; // Thêm useState
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from './Components/Home';
import Choose from './Components/Choose';
import Level from './Components/Level';
import Law from './Components/Law';
import Login from './Components/Login';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Thêm trạng thái đăng nhập

  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/home" element={<Home isLoggedIn={isLoggedIn} />} /> {/* Truyền isLoggedIn */}
          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/law" element={<Law />} />
          <Route path="/choose" element={<Choose />} />
          <Route 
            path="/level/:levelNumber" 
            element={<LevelWrapper />} 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

// Tạo một component wrapper để xử lý params
const LevelWrapper = () => {
  const { levelNumber } = useParams();
  return <Level level={parseInt(levelNumber)} />;
};

export default App;