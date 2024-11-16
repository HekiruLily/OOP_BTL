package com.example.numbergame.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.numbergame.model.Player;

public interface PlayerRepository extends JpaRepository<Player, Long> {
    Optional<Player> findByUsername(String username);
}
