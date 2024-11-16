package com.example.numbergame.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.numbergame.model.GameHistory;
import com.example.numbergame.model.Player;

public interface GameHistoryRepository extends JpaRepository<GameHistory, Long> {
    List<GameHistory> findByPlayerId(Long playerId);
        GameHistory findTopByPlayerOrderByGuessTimeDesc(Player player);
}
