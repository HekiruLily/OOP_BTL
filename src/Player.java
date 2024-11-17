//player.java không được liên kết trực tiếp với GameHistory.java

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class Player {
    private String username; // Tên tài khoản của người chơi
    private String password; // Mật khẩu của người chơi
    private List<Game> gamesParticipated; // Danh sách trò chơi mà người chơi đã tham gia
    
    public Player(String username, String password) {
        this.username = username;
        this.password = password;
        this.gamesParticipated = new ArrayList<>(); // Khởi tạo danh sách trò chơi

    }

    public String getname() {
        return username;
    }
    public void setname(String username) {
        this.username = username;
    }

    public String getpassword() {
        return password;
    }
    public void setpassword(String password) {
        this.password = password;
    }

    // Phương thức để thêm trò chơi vào danh sách trò chơi đã tham gia
    public void addGame(Game game) {
        gamesParticipated.add(game);
    }

    // Phương thức để lấy danh sách trò chơi đã tham gia
    public List<Game> getGamesParticipated() {
        return gamesParticipated;
    }

    @Override
        public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Player player = (Player) obj;
        return username.equals(player.username); // So sánh dựa trên username
    }

@Override
public int hashCode() {
    return Objects.hash(username); // Cung cấp hashCode tương ứng
}

}