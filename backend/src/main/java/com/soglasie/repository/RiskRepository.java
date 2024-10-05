package com.soglasie.repository;

import com.soglasie.entity.Risk;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RiskRepository extends JpaRepository<Risk, Integer> {
}
