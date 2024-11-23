package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Player;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Integer> {
    Player findByUsername(String username);
    boolean existsByUsername(String username);
    List<Player> findByUsernameContaining(String usernamePart);
    List<Player> findByUsernameAndPassword(String username, String password);
}