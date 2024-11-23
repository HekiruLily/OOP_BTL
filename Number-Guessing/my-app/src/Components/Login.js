import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../CSS/Login.css';

const Login = ({ setIsLoggedIn }) => { // Nhận prop setIsLoggedIn
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn chặn reload trang
    // Kiểm tra thông tin đăng nhập (có thể thay đổi theo yêu cầu)
    if (username && password) {
      setIsLoggedIn(true);
      navigate('/home'); 
    } else {
      alert('Please enter username and password.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User name:</label>
          <input  type="text"  value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;