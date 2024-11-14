//Một lớp để kết nối giữa Game và Admin, xử lý các yêu cầu từ người chơi và trả về kết quả.
// GameService.java
import java.util.ArrayList;
import java.util.List;

public class GameService {
    private List<Player> players; // Danh sách người chơi
    private List<Game> games; // Danh sách trò chơi

    public GameService() {
        this.players = new ArrayList<>();
        this.games = new ArrayList<>();
    }

    // Phương thức để đăng ký người chơi
    public void registerPlayer(Player player) {
        players.add(player);
        System.out.println("Người chơi " + player.getname() + " đã được đăng ký.");
    }

    // Phương thức để bắt đầu trò chơi
    public void startGame(Player player) {
        // Logic để bắt đầu trò chơi cho người chơi
        System.out.println("Trò chơi đã bắt đầu cho người chơi: " + player.getname());
    }

    // Phương thức để lấy danh sách người chơi
    public List<Player> getPlayers() {
        return players;
    }

    // Phương thức để lấy danh sách trò chơi
    public List<Game> getGames() {
        return games;
    }

    // Phương thức để thêm trò chơi vào danh sách
    public void addGame(Game game) {
        games.add(game);
    }
}