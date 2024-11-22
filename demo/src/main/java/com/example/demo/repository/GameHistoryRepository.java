package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.GameHistory;

@Repository
public interface GameHistoryRepository extends JpaRepository<GameHistory, Integer> {
    List<GameHistory> findByIdPlayer(int idPlayer);
    List<GameHistory> findByResult(boolean result);
    List<GameHistory> findByLevel(int level);
    List<GameHistory> findByTimePlayedLessThan(int time);
    List<GameHistory> findByScoreGreaterThan(int score);
    List<GameHistory> findByIdPlayerAndResult(int idPlayer, boolean result);
}