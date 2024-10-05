package com.soglasie.repository;

import com.soglasie.entity.Agent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AgentRepository extends JpaRepository<Agent, Integer> {

}
