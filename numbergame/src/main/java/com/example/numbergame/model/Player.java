package com.example.numbergame.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;  // Khóa chính

    private String username;  // Tên người chơi
    private String password;  // Mật khẩu người chơi

    @Column(name = "created_at")  
    private LocalDateTime createdAt;  // Thời gian tạo tài khoản

    // Constructor mặc định
    public Player() {
        this.createdAt = LocalDateTime.now();  // Tự động gán thời gian tạo tài khoản
    }

    // Constructor có tham số để tạo người chơi mới
    public Player(String username, String password) {
        this.username = username;
        this.password = password;
        this.createdAt = LocalDateTime.now();  // Tự động gán thời gian tạo tài khoản
    }

    // Getter và Setter
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
