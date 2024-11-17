package com.example.numbergame.controller;

import com.example.numbergame.model.Player;
import com.example.numbergame.model.GameHistory;
import com.example.numbergame.service.PlayerService;
import com.example.numbergame.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class GameController {

    @Autowired
    private PlayerService playerService;

    @Autowired
    private GameService gameService;

    // Tạo người chơi mới
    @PostMapping("/players")
    public Player createPlayer(@RequestBody Player player) {
        return playerService.createPlayer(player);
    }

    // Lấy danh sách người chơi
    @GetMapping("/players")
    public List<Player> getAllPlayers() {
        return playerService.getAllPlayers();
    }

    // Lưu lịch sử trò chơi
    @PostMapping("/gameHistory")
    public GameHistory saveGameHistory(@RequestBody GameHistory gameHistory) {
        return gameService.saveGameHistory(gameHistory);
    }

    // Lấy lịch sử trò chơi của người chơi
    @GetMapping("/gameHistory/{playerId}")
    public List<GameHistory> getGameHistory(@PathVariable Long playerId) {
        return gameService.getGameHistory(playerId);
    }

    // Bắt đầu trò chơi cho người chơi
    @PostMapping("/start/{playerId}")
    public GameHistory startGame(@PathVariable Long playerId) {
        return gameService.startGame(playerId);
    }

    // Người chơi đoán số
    @PostMapping("/guess")
    public GameHistory makeGuess(@RequestParam Long playerId, @RequestParam Integer guess) {
        return gameService.makeGuess(playerId, guess);
    }
}
