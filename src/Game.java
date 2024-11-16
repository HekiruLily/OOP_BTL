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
    private Player currentPlayer; // Người chơi hiện tại
    private List<GameHistory> gameHistories; // Danh sách lịch sử trò chơi
    private long timeLimit; // Thời gian giới hạn cho mỗi lượt đoán
    private long startTime; // Thời gian bắt đầu trò chơi
    private boolean gameEnded; // Biến kiểm tra trò chơi đã kết thúc hay chưa

    public Game(Player player, int level) {
        this.currentPlayer = player;
        this.level = level;
        this.attempts = setAttemptsBasedOnLevel(level);
        this.randomNumber = generateNumber();
        this.gameHistories = new ArrayList<>();
        this.attemptsUsed = 0;
        player.addGame(this);
        this.gameId = generateGameId();
        this.timeLimit = setTimeLimitBasedOnLevel(level); // Thiết lập thời gian dựa trên cấp độ
        this.startTime = System.currentTimeMillis(); // Lưu thời gian bắt đầu
        this.gameEnded = false; // Khởi tạo gameEnded là false
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

    private long setTimeLimitBasedOnLevel(int level) {
        switch (level) {
            case 1:
                return 60000; // 60 giây cho dễ
            case 2:
                return 45000; // 40 giây cho trung bình
            case 3:
                return 30000; // 30 giây cho khó
            default:
                return 0;
        }
    }

    public boolean isGameEnded() {
        return gameEnded;
    }

    private String generateGameId() {
        return "Game_" + System.currentTimeMillis(); // Ví dụ đơn giản
    }

    private int generateNumber() {
        return (int) (Math.random() * 100) + 1; // Số ngẫu nhiên từ 1 đến 100
    }

    public String checkGuess(int guess) {
        // Kiểm tra xem guess có hợp lệ không
        if (guess < 1 || guess > 100) {
            return "Bạn cần đoán một số trong khoảng từ 1 đến 100. Vui lòng thử lại!";
        }
    
        long currentTime = System.currentTimeMillis();
        if (currentTime - startTime > timeLimit) {
            notifyTimeOut(); // Gọi phương thức thông báo hết giờ
            gameEnded = true;
            return "Hết giờ! Số cần tìm là " + randomNumber + ".";
        }
    
        attemptsUsed++;
        attempts--; // Giảm lượt đoán chỉ khi guess hợp lệ
        if (guess < randomNumber) {
            return "Bạn đoán quá thấp!";
        } else if (guess > randomNumber) {
            return "Bạn đoán quá cao!";
        } else {
            // Nếu đoán đúng
            GameHistory history = new GameHistory(gameId, currentPlayer, score, attemptsUsed, timePlayed, "Thắng");
            gameHistories.add(history);
            gameEnded = true;
            return "Chúc mừng! Bạn đã đoán đúng!";
        }
    }

    private void notifyTimeOut() {
        System.out.println("Hết giờ! Số cần tìm là " + randomNumber + ".");
        GameHistory history = new GameHistory(gameId, currentPlayer, score, attemptsUsed, timePlayed, "Thua");
        gameHistories.add(history);
        gameEnded = true;
    }

    public void notifyResult() {
        if (attempts == 0) {
            System.out.println("Bạn đã hết lượt! Số đúng là " + randomNumber + ".");
            GameHistory history = new GameHistory(gameId, currentPlayer, score, attemptsUsed, timePlayed, "Thua");
            gameHistories.add(history);
            gameEnded = true;
        }
    }
}