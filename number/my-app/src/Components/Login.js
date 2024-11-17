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
      alert('Vui lòng nhập tên người dùng và mật khẩu.');
    }
  };

  return (
    <div className="login-container">
      <h2>Đăng Nhập</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên người dùng:</label>
          <input  type="text"  value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Mật khẩu:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Đăng Nhập</button>
      </form>
    </div>
  );
};

export default Login;