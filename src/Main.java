import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        try {
            while (true) {
                System.out.print("Nhập tên người chơi: ");
                String username = scanner.nextLine();
                System.out.print("Nhập mật khẩu: ");
                String password = scanner.nextLine();
                Player player = new Player(username, password);
                
                GameService gameService = new GameService(); // Khởi tạo GameService
                GameController gameController = new GameController(gameService); // Khởi tạo GameController

                boolean continuePlaying = true;
                while (continuePlaying) {
                    System.out.print("Chọn cấp độ (1 - Dễ, 2 - Trung bình, 3 - Khó): ");
                    int level = scanner.nextInt();
                    scanner.nextLine(); // Đọc dòng mới còn lại
                    gameController.startGame(player, level); // Bắt đầu trò chơi thông qua GameController

                    while (!gameController.isGameEnded()) {
                        System.out.print("Nhập số bạn đoán: ");
                        int guess = scanner.nextInt();
                        scanner.nextLine(); // Đọc dòng mới còn lại
                        gameController.makeGuess(guess);
                    }

                    continuePlaying = gameController.askToContinue(); // Hỏi người chơi có muốn tiếp tục chơi hay không
                }

                // Kiểm tra xem người chơi có muốn nhập lại tên và mật khẩu không
                System.out.print("Bạn có muốn nhập lại tên người chơi và mật khẩu không? (y/n): ");
                String restartResponse = scanner.next();
                scanner.nextLine(); // Đọc dòng mới còn lại
                if (restartResponse.equalsIgnoreCase("n")) {
                    break; // Thoát khỏi vòng lặp chính
                }
            }
        } finally {
            scanner.close(); // Đóng Scanner
        }
        
        System.out.println("Cảm ơn bạn đã chơi!");
    }
}