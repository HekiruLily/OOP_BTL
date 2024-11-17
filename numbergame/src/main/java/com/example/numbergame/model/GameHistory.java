package com.example.numbergame.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class GameHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;  // Khóa chính

    @ManyToOne  // Quan hệ nhiều-một với bảng Player
    @JoinColumn(name = "player_id")  // Trường khóa ngoại trỏ đến bảng Player
    private Player player;  // Người chơi

    private Integer secretNumber;  // Số bí mật mà người chơi phải đoán
    private Integer guess;  // Số đoán của người chơi
    private Boolean isCorrect;  // Kết quả đoán đúng hay sai

    @Column(name = "guess_time")  
    private LocalDateTime guessTime;  // Thời gian đoán

    // Constructor mặc định
    public GameHistory() {
        this.guessTime = LocalDateTime.now();  // Tự động gán thời gian đoán
    }

    // Constructor có tham số
    public GameHistory(Player player, Integer secretNumber, Integer guess, Boolean isCorrect) {
        this.player = player;
        this.secretNumber = secretNumber;
        this.guess = guess;
        this.isCorrect = isCorrect;
        this.guessTime = LocalDateTime.now();
    }

    // Getter và Setter
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }

    public Integer getSecretNumber() {
        return secretNumber;
    }

    public void setSecretNumber(Integer secretNumber) {
        this.secretNumber = secretNumber;
    }

    public Integer getGuess() {
        return guess;
    }

    public void setGuess(Integer guess) {
        this.guess = guess;
    }

    public Boolean getIsCorrect() {
        return isCorrect;
    }

    public void setIsCorrect(Boolean isCorrect) {
        this.isCorrect = isCorrect;
    }

    public LocalDateTime getGuessTime() {
        return guessTime;
    }

    public void setGuessTime(LocalDateTime guessTime) {
        this.guessTime = guessTime;
    }
}
