package com.soglasie.repository;

import com.soglasie.entity.Agent;
import com.soglasie.entity.Contract;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContractRepository extends JpaRepository<Contract, Integer> {
    List<Contract> findByAgentId(Agent agent);
}
