package com.example.numbergame.service;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.numbergame.model.GameHistory;
import com.example.numbergame.model.Player;
import com.example.numbergame.repository.GameHistoryRepository;
import com.example.numbergame.repository.PlayerRepository;

@Service
public class GameService {

    @Autowired
    private GameHistoryRepository gameHistoryRepository;

    @Autowired
    private PlayerRepository playerRepository;

    // Bắt đầu trò chơi cho người chơi
    public GameHistory startGame(Long playerId) {
        Player player = playerRepository.findById(playerId)
                .orElseThrow(() -> new RuntimeException("Player not found"));

        // Tạo số bí mật ngẫu nhiên từ 1 đến 100
        int secretNumber = new Random().nextInt(100) + 1;

        // Tạo GameHistory và lưu vào cơ sở dữ liệu
        GameHistory gameHistory = new GameHistory();
        gameHistory.setPlayer(player);
        gameHistory.setSecretNumber(secretNumber); // Lưu số bí mật

        // Lưu game history vào cơ sở dữ liệu
        return gameHistoryRepository.save(gameHistory);
    }

    // Người chơi đoán số
    public GameHistory makeGuess(Long playerId, Integer guess) {
        Player player = playerRepository.findById(playerId)
                .orElseThrow(() -> new RuntimeException("Player not found"));

        // Lấy game history gần nhất của người chơi (lịch sử trò chơi gần nhất)
        GameHistory gameHistory = gameHistoryRepository.findTopByPlayerOrderByGuessTimeDesc(player);

        if (gameHistory == null) {
            throw new RuntimeException("Game has not been started for this player");
        }

        // So sánh số đoán với số bí mật
        boolean isCorrect = guess.equals(gameHistory.getSecretNumber());

        // Cập nhật kết quả đoán vào game history
        gameHistory.setGuess(guess);
        gameHistory.setIsCorrect(isCorrect);

        // Nếu đoán đúng, in ra "Chúc mừng"
        if (isCorrect) {
            System.out.println("Chúc mừng! Bạn đã đoán đúng số bí mật: " + gameHistory.getSecretNumber());
        } else {
            System.out.println("Số bạn đoán không đúng. Hãy thử lại!");
        }

        // Lưu lại game history vào cơ sở dữ liệu
        return gameHistoryRepository.save(gameHistory);
    }

    // Lưu game history vào cơ sở dữ liệu
    public GameHistory saveGameHistory(GameHistory gameHistory) {
        return gameHistoryRepository.save(gameHistory);
    }

    // Lấy lịch sử trò chơi của người chơi
    public List<GameHistory> getGameHistory(Long playerId) {
        return gameHistoryRepository.findByPlayerId(playerId);
    }
}
