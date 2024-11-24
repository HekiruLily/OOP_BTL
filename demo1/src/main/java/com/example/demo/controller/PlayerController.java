package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired; // cần tạo repository cho Player
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

import com.example.demo.model.Player;
import com.example.demo.repository.PlayerRepository;

@RestController
@RequestMapping("/api/players")
public class PlayerController {

    @Autowired
    private PlayerRepository playerRepository;

    // Lấy danh sách tất cả người chơi
    @GetMapping
    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    // Lấy thông tin người chơi theo ID
    @GetMapping("/{id}")
    public ResponseEntity<Player> getPlayerById(@PathVariable int id) {
        return playerRepository.findById(id)
                .map(player -> ResponseEntity.ok().body(player))
                .orElse(ResponseEntity.notFound().build());
    }

    // Thêm người chơi mới
    @PostMapping
    public Player createPlayer(@RequestBody Player player) {
        return playerRepository.save(player);
    }

    // Cập nhật thông tin người chơi
    @PutMapping("/{id}")
    public ResponseEntity<Player> updatePlayer(@PathVariable int id, @RequestBody Player playerDetails) {
        return playerRepository.findById(id)
                .map(player -> {
                    player.setUsername(playerDetails.getUsername());
                    player.setPassword(playerDetails.getPassword());
                    Player updatedPlayer = playerRepository.save(player);
                    return ResponseEntity.ok(updatedPlayer);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // Xóa người chơi
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePlayer(@PathVariable int id) {
        try {
            return playerRepository.findById(id)
                    .map(player -> {
                        playerRepository.delete(player);
                        return ResponseEntity.noContent().<Void>build(); // Chỉ định kiểu dữ liệu là Void
                    })
                    .orElse(ResponseEntity.notFound().build());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}