import React from 'react';
import '../CSS/Rules.css';
import { useNavigate } from 'react-router-dom'; 

const Law = ({ onClose }) => {
  const navigate = useNavigate(); 

  const handleClose = () => {
    onClose(); 
  };

  const handleStart = () => {
    onClose(); 
    navigate('/choose'); 
  };

  return (
    <div className="modal show" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Luật Chơi:</h2>
        <p>Người chơi phải đoán đúng một số bí mật được tạo ngẫu nhiên trong một phạm vi xác định (ví dụ, từ 1 đến 100).</p>
        <h2>Cách chơi:</h2>
        <p>Trò chơi sẽ chọn một số ngẫu nhiên mà người chơi không biết. Người chơi có một số lượt đoán giới hạn (ví dụ, 5 lượt). Sau mỗi lần đoán, trò chơi sẽ thông báo cho người chơi biết số họ đoán là quá cao, quá thấp, hay đúng.</p>
        <h2>Điểm số:</h2>
        <p>Số lần đoán càng ít, điểm của người chơi càng cao. Người chơi thắng nếu đoán đúng số bí mật trong phạm vi lượt đoán. Nếu người chơi không đoán đúng trong giới hạn lượt đoán, họ sẽ thua.</p>
        <h2>Mẹo:</h2>
        <p>Người chơi nên sử dụng các chiến lược như loại trừ các số đã đoán và điều chỉnh phạm vi dựa trên phản hồi từ trò chơi.</p>
        <div className=" button-group">
          <button className="handleClose" onClick={handleClose}>Exit</button>
        </div> 
      </div>
    </div>
  );
};

export default Law;