import java.util.ArrayList;
import java.util.List;

public class Admin {
    private String username; // Tên tài khoản của admin
    private String password; // Mật khẩu của admin
    private List<Player> playerList; // Danh sách người chơi
    private List<Game> gameList; // Danh sách các trò chơi đã diễn ra

    public Admin(String username, String password) {
        this.username = username;
        this.password = password;
        this.playerList = new ArrayList<>();
        this.gameList = new ArrayList<>();
    }
    public String getUsername() {
        return username;
    }
    public String getPassword() {
        return password;
    }
    // Phương thức thêm người chơi
    public void addPlayer(Player player) {
        playerList.add(player);
        System.out.println("Người chơi " + player.getname() + " đã được thêm vào danh sách.");
    }

    // Phương thức xóa người chơi
    public void removePlayer(Player player) {
        if (playerList.remove(player)) {
            System.out.println("Người chơi " + player.getname() + " đã được xóa khỏi danh sách.");
        } else {
            System.out.println("Người chơi không tồn tại trong danh sách.");
        }
    }

    // Phương thức kiểm tra người chơi có tồn tại hay không
    public boolean playerExists(Player player) {
        return playerList.contains(player);
    }

    // Phương thức lấy danh sách người chơi
    public List<Player> getPlayerList() {
        return playerList;
    }

    // Phương thức lấy danh sách trò chơi
    public List<Game> getGameList() {
        return gameList;
    }
}





