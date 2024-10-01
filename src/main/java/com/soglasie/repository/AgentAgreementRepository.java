package com.soglasie.repository;

import com.soglasie.entity.AgentAgreement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AgentAgreementRepository extends JpaRepository<AgentAgreement, Integer> {
}
