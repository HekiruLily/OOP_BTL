//GameController.java: Xử lý logic điều khiển trò chơi.
import java.util.ArrayList;
import java.util.List;

public class GameController {
    private Game currentGame; // Trò chơi hiện tại
    private Player currentPlayer; // Người chơi hiện tại
    private GameService gameService; // Kết nối với GameService
    private List<GameHistory> gameHistories; // Lưu trữ lịch sử trò chơi

    // Constructor để khởi tạo GameController với GameService
    public GameController(GameService gameService) {
        this.gameService = gameService;
        this.gameHistories = new ArrayList<>(); // Khởi tạo danh sách
    }

    // Phương thức để bắt đầu trò chơi, xử lý lượt đoán, và thông báo kết quả
    public void startGame(Player player, int level) {
        this.currentPlayer = player;
        currentGame = new Game(player, level); // Khởi tạo với cấp độ do người chơi chọn
        gameService.startGame(player); // Gọi phương thức từ GameService
        gameService.addGame(currentGame); // Thêm trò chơi vào danh sách trò chơi
    }
    public void makeGuess(int guess) {
        String response = currentGame.checkGuess(guess);
        System.out.println(response);
        currentGame.notifyResult(); // Kiểm tra và thông báo kết quả
    }

    // Có thể thêm các phương thức khác để lấy GameHistory nếu cần
}