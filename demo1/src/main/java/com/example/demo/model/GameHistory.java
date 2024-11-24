package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "gamehistory")
public class GameHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idGame; // Khóa chính, tự động tăng

    private int idPlayer; // Khóa ngoại liên kết với bảng Player
    private int level; // Mức độ của trò chơi
    private int numberToGuess; // Số cần đoán
    private int timePlayed; // Thời gian chơi
    private int attempted; // Số lần thử
    private boolean result; // Kết quả (true: thắng, false: thua)
    private int score; // Điểm số

    // Constructor mặc định
    public GameHistory() {}

    // Constructor có tham số
    public GameHistory(int idPlayer, int level, int numberToGuess, int timePlayed, int attempted, boolean result, int score) {
        this.idPlayer = idPlayer;
        this.level = level;
        this.numberToGuess = numberToGuess;
        this.timePlayed = timePlayed;
        this.attempted = attempted;
        this.result = result;
        this.score = score;
    }

    // Getters và Setters
    public int getIdGame() {
        return idGame;
    }

    public void setIdGame(int idGame) {
        this.idGame = idGame;
    }

    public int getIdPlayer() {
        return idPlayer;
    }

    public void setIdPlayer(int idPlayer) {
        this.idPlayer = idPlayer;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public int getNumberToGuess() {
        return numberToGuess;
    }

    public void setNumberToGuess(int numberToGuess) {
        this.numberToGuess = numberToGuess;
    }

    public int getTimePlayed() {
        return timePlayed;
    }

    public void setTimePlayed(int timePlayed) {
        this.timePlayed = timePlayed;
    }

    public int getAttempted() {
        return attempted;
    }

    public void setAttempted(int attempted) {
        this.attempted = attempted;
    }

    public boolean isResult() {
        return result;
    }

    public void setResult(boolean result) {
        this.result = result;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }
}