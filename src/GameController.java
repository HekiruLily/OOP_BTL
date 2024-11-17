import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

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

        if (currentGame.isGameEnded()) {
            askToContinue(); // Hỏi người chơi có muốn tiếp tục chơi hay không
        }
    }

    public boolean askToContinue() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Bạn có muốn tiếp tục chơi không? (y/n): ");
        String continueResponse = scanner.next();
        scanner.nextLine(); // Đọc dòng mới còn lại
        if (continueResponse.equalsIgnoreCase("y")) {
            // Logic để bắt đầu trò chơi mới
            System.out.print("Chọn cấp độ (1 - Dễ, 2 - Trung bình, 3 - Khó): ");
            int level = scanner.nextInt();
            scanner.nextLine(); // Đọc dòng mới còn lại
            startGame(currentPlayer, level); // Bắt đầu trò chơi mới
            return true;
        } else {
            return false;
        }
    }

    public boolean isGameEnded() {
        return currentGame.isGameEnded(); // Kiểm tra xem trò chơi đã kết thúc hay chưa
    }
}