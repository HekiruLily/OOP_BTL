Giải thích các mối quan hệ:
Admin quản lý nhiều Player (1 Admin có thể quản lý nhiều Player).
Player tham gia vào nhiều Game (1 Player có thể chơi nhiều Game).
Game có thể tạo ra nhiều GameHistory (1 Game có thể có nhiều lịch sử trò chơi).
GameController điều khiển một Game và một Player hiện tại (1 GameController quản lý 1 Game và 1 Player).
GameService kết nối với Admin, quản lý danh sách Player và danh sách Game.

+-----------------+
|      Admin      |
|-----------------|
| - username      |
| - password      |
| - playerList    |
| - gameList      |
|-----------------|
| + addPlayer()   |
| + removePlayer()|
+-----------------+
         |
         |
         | 1
         |
         | *
+-----------------+
|     Player      |
|-----------------|
| - username      |
| - password      |
|-----------------|
| + getname()     |
| + setname()     |
| + getpassword() |
| + setpassword() |
+-----------------+
         |
         |
         | 1
         |
         | *
+-----------------+
|      Game       |
|-----------------|
| - randomNumber  |
| - attempts      |
| - level         |
| - timeLimit     |
|-----------------|
| + generateNumber()|
| + checkGuess()   |
| + notifyResult() |
+-----------------+
         |
         |
         | 1
         |
         | *
+-----------------+
|   GameHistory    |
|-----------------|
| - gameId        |
| - player        |
| - score         |
| - attemptsUsed  |
| - timePlayed    |
| - result        |
+-----------------+
         |
         |
         | 1
         |
         | *
+-----------------+
| GameController  |
|-----------------|
| - currentGame   |
| - currentPlayer  |
|-----------------|
| + startGame()   |
| + makeGuess()   |
+-----------------+
         |
         |
         | 1
         |
         | *
+-----------------+
|   GameService   |
|-----------------|
| - admin         |
| - players       |
| - games         |
|-----------------|
| + registerPlayer()|
| + startGame()   |
+-----------------+