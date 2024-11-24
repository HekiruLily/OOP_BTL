File đã sửa:
- login.js
- playercontroller.java
- playerrepository.java
- player.java
- webconfig.java
-level.js

Hãy hướng dẫn cho tôi chi tiết các bước để khi người chơi hoàn thành trò chơi tại http://localhost:3000/level/1 hoặc http://localhost:3000/level/2 hoặc http://localhost:3000/level/3 thì dữ liệu từ frontend bao gồm idgame, idplayer(được lấy từ backend khi người dùng đăng nhập), level, numberToGuess (số cần đoán), timePlayed (thời gian chơi), attempted (số lần thử), result(kết quả theo kiêu Boolean(TinyINT trong mysql)), và score(điểm số) được truyền vào backend với đường dẫn http://localhost:8080/api/gameHistories để khi sử dụng phương thức GET với đường dẫn http://localhost:8080/api/gameHistories sẽ hiển thị đầy đủ thông tin mà backend nhận được