package com.soglasie.service;

import com.soglasie.entity.AgentAgreement;
import com.soglasie.repository.AgentAgreementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AgentAgreementService {

    @Autowired
    private AgentAgreementRepository agentAgreementRepository;

    public AgentAgreement createAgentAgreement(AgentAgreement agentAgreement) {
        return agentAgreementRepository.save(agentAgreement);
    }

    public List<AgentAgreement> getAllAgentAgreements() {
        return agentAgreementRepository.findAll();
    }

    public Optional<AgentAgreement> getAgentAgreementById(int id) {
        return agentAgreementRepository.findById(id);
    }

    public void deleteAgentAgreementById(int id) {
        agentAgreementRepository.deleteById(id);
    }

    public AgentAgreement updateAgentAgreement(AgentAgreement agentAgreement) {
        return agentAgreementRepository.save(agentAgreement);
    }
}
