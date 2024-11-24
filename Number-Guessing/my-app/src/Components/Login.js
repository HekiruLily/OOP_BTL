import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import '../CSS/Login.css';

const Login = ({ setIsLoggedIn , setIdPlayer }) => { // Nhận prop setIsLoggedIn
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (username && password) {
      try {
        const response = await axios.post('http://localhost:8080/api/players', {
          username,
          password,
        });

        if (response.status === 201) {
          setIdPlayer(response.data.idPlayer); // Lưu idPlayer từ phản hồi
          setIsLoggedIn(true);
          navigate('/home');
        } else {
          alert('Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin.');
        }
      } catch (error) {
        console.error('Có lỗi xảy ra:', error);
        alert('Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin.');
      }
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