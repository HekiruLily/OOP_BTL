import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../CSS/History.css';

const History = () => {
    const [history, setHistory] = useState([]);
    const navigate = useNavigate(); 
    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/gameHistories');
                setHistory(response.data);
            } catch (error) {
                console.error('Error fetching game history:', error);
            }
        };

        fetchHistory();
    }, []);

    const handleBackToChoose = () => {
        navigate('/home');
    };

    return (
        <div className="history-container">
            <h2 className="history-title">Lịch sử chơi</h2>
            <ul className="history-list">
                {history.map((item) => (
                    <li key={item.idGame} className="history-item">
                        Level: {item.level}, Số cần đoán: {item.numberToGuess}, Kết quả: {item.result ? 'Thắng' : 'Thua'}, Điểm: {item.score}
                    </li>
                ))}
            </ul>
            <div className="back-button-container">
                <button onClick={handleBackToChoose} className="back-button">Quay lại</button>
            </div>
        </div>
    );
};

export default History;