username: "root"
password: "1234"
localhost: 3306

## Bảng Player:
- **idPlayer**: int, PK, NN, unique
- **username**: varchar, NN, unique
- **password**: varchar, NN

## Bảng GameHistory:
- **idGame**: int, PK, unique
- **idPlayer**: int, FK, unique
- **level**: int
- **numberToGuess** (số cần đoán): int
- **timePlayed** (thời gian chơi): int
- **attempted** (số lần thử): int
- **result** (kết quả): boolean (true: thắng x1 / false: thua x0)
- **score** (điểm): int