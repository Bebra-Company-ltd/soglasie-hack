package com.soglasie.repository;

import com.soglasie.entity.Agent;
import com.soglasie.entity.AgentAgreement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AgentAgreementRepository extends JpaRepository<AgentAgreement, Integer> {
    List<AgentAgreement> findByAgentId(Agent agentId);
}
