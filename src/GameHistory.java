public class GameHistory {
    private String gameId;
    private Player player;
    private int score;
    private int attemptsUsed;
    private long timePlayed;
    private String result;

    // Constructor
    public GameHistory(String gameId, Player player, int score, int attemptsUsed, long timePlayed, String result) {
        this.gameId = gameId;
        this.player = player;
        this.score = score;
        this.attemptsUsed = attemptsUsed;
        this.timePlayed = timePlayed;
        this.result = result;
    }

    // Getter và Setter cho các thuộc tính
    public String getGameId() {
        return gameId;
    }

    public void setGameId(String gameId) {
        this.gameId = gameId;
    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public int getAttemptsUsed() {
        return attemptsUsed;
    }

    public void setAttemptsUsed(int attemptsUsed) {
        this.attemptsUsed = attemptsUsed;
    }

    public long getTimePlayed() {
        return timePlayed;
    }

    public void setTimePlayed(long timePlayed) {
        this.timePlayed = timePlayed;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }
}
