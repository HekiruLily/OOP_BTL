package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.GameHistory;
import com.example.demo.repository.GameHistoryRepository;

@RestController
@RequestMapping("/api/gameHistories")
public class GameHistoryController {

    @Autowired
    private GameHistoryRepository gameHistoryRepository;

    // Lấy danh sách tất cả lịch sử trò chơi
    @GetMapping
    public List<GameHistory> getAllGameHistories() {
        return gameHistoryRepository.findAll();
    }

    // Lấy thông tin lịch sử trò chơi theo ID
    @GetMapping("/{id}")
    public ResponseEntity<GameHistory> getGameHistoryById(@PathVariable int id) {
        return gameHistoryRepository.findById(id)
                .map(gameHistory -> ResponseEntity.ok().body(gameHistory))
                .orElse(ResponseEntity.notFound().build());
    }

    // Thêm lịch sử trò chơi mới
    @PostMapping
    public ResponseEntity<GameHistory> createGameHistory(@RequestBody GameHistory gameHistory) {
        GameHistory savedGameHistory = gameHistoryRepository.save(gameHistory);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedGameHistory);
    }

    // Cập nhật thông tin lịch sử trò chơi
    @PutMapping("/{id}")
    public ResponseEntity<GameHistory> updateGameHistory(@PathVariable int id, @RequestBody GameHistory gameHistoryDetails) {
        return gameHistoryRepository.findById(id)
                .map(gameHistory -> {
                    gameHistory.setIdPlayer(gameHistoryDetails.getIdPlayer());
                    gameHistory.setLevel(gameHistoryDetails.getLevel());
                    gameHistory.setNumberToGuess(gameHistoryDetails.getNumberToGuess());
                    gameHistory.setTimePlayed(gameHistoryDetails.getTimePlayed());
                    gameHistory.setAttempted(gameHistoryDetails.getAttempted());
                    gameHistory.setResult(gameHistoryDetails.isResult());
                    gameHistory.setScore(gameHistoryDetails.getScore());
                    GameHistory updatedGameHistory = gameHistoryRepository.save(gameHistory);
                    return ResponseEntity.ok(updatedGameHistory);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // Xóa lịch sử trò chơi
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGameHistory(@PathVariable int id) {
        try {
            return gameHistoryRepository.findById(id)
                    .map(gameHistory -> {
                        gameHistoryRepository.delete(gameHistory);
                        return ResponseEntity.noContent().<Void>build();
                    })
                    .orElse(ResponseEntity.notFound().build());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    // Xóa tất cả lịch sử trò chơi
    @DeleteMapping
    public ResponseEntity<Void> deleteAllGameHistories() {
        try {
            gameHistoryRepository.deleteAll();
            return ResponseEntity.noContent().build(); // Trả về mã trạng thái 204
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build(); // Trả về mã lỗi 500 nếu có lỗi xảy ra
        }
    } //resetID: ALTER TABLE gamehistory AUTO_INCREMENT = 1; xóa hết trước khi reset
}