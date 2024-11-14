//Chứa logic của trò chơi, bao gồm việc sinh số ngẫu nhiên, kiểm tra dự đoán của người chơi, và thông báo kết quả.

import java.util.ArrayList;
import java.util.List;

public class Game {
    private String gameId; // ID của trò chơi
    private int randomNumber; // Số ngẫu nhiên được sinh ra
    private int attempts; // Số lượt đoán còn lại
    private int attemptsUsed; // Số lượt đoán đã sử dụng
    private int score; // Điểm số của người chơi
    private long timePlayed; // Thời gian chơi
    private int level; // Cấp độ trò chơi (dễ/trung bình/khó)
    private long timeLimit; // Thời gian giới hạn cho mỗi lượt đoán
    private Player currentPlayer; // Người chơi hiện tại
    private List<GameHistory> gameHistories; // Danh sách lịch sử trò chơi

    public Game(Player player, int level) {
        this.currentPlayer = player;
        this.level = level;
        this.attempts = setAttemptsBasedOnLevel(level);
        this.randomNumber = generateNumber();
        this.gameHistories = new ArrayList<>();
        this.attemptsUsed = 0; // Khởi tạo số lượt đã sử dụng
        player.addGame(this); // Thêm trò chơi vào danh sách trò chơi của người chơi
        this.gameId = generateGameId(); // Giả sử bạn có một phương thức để tạo gameId
    }

    private int setAttemptsBasedOnLevel(int level) {
        switch (level) {
            case 1:
                return 10; // Dễ
            case 2:
                return 7; // Trung bình
            case 3:
                return 3; // Khó
            default:
                return 0; // Hoặc một giá trị mặc định
        }
    }

    // Phương thức để tạo gameId
    private String generateGameId() {
        // Logic để tạo ra gameId duy nhất
        return "Game_" + System.currentTimeMillis(); // Ví dụ đơn giản
    }

    private int generateNumber() {
        return (int) (Math.random() * 100) + 1; // Số ngẫu nhiên từ 1 đến 100
    }

    public String checkGuess(int guess) {
        attemptsUsed++; // Tăng số lượt đã sử dụng
        if (guess < randomNumber) {
            attempts--;
            return "Bạn đoán quá thấp!";
        } else if (guess > randomNumber) {
            attempts--;
            return "Bạn đoán quá cao!";
        } else {
            // Nếu đoán đúng, thêm vào lịch sử trò chơi
            GameHistory history = new GameHistory(gameId, currentPlayer, score, attemptsUsed, timePlayed, "Thắng");
            gameHistories.add(history);
            return "Chúc mừng! Bạn đã đoán đúng!";
        }
    }

    public void notifyResult() {
        if (attempts == 0) {
            System.out.println("Bạn đã hết lượt! Số đúng là " + randomNumber + ".");
            // Thêm lịch sử trò chơi vào gameHistories
            GameHistory history = new GameHistory(gameId, currentPlayer, score, attemptsUsed, timePlayed, "Thua");
            gameHistories.add(history);
        }
    }
}