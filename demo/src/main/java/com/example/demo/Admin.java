package com.example.demo;

import java.util.ArrayList;
import java.util.List;

public class Admin {
    private final String username = "admin";
    private final String password = "admin";
    private List<Player> players;

    public Admin() {
        players = new ArrayList<>();
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    //thêm người chơi
    public void addPlayer(Player player) {
        players.add(player);
        System.out.println("Người chơi " + player.getUsername() + " đã được thêm.");
        }

    //xóa người chơi
    public void removePlayer(Player player) {
        if (players.remove(player)) {
            System.out.println("Người chơi " + player.getUsername() + " đã được xóa.");
        } else {
            System.out.println("Người chơi không tồn tại.");
        }
    }

    //danh sách người chơi
    public List<Player> getPlayers() {
        return players;
    }
}