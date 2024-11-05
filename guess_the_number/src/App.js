import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from './Components/Home';
import Choose from './Components/Choose';
import Level from './Components/Level';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
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