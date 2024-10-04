package com.soglasie.service;

import com.soglasie.entity.AgentAgreement;
import com.soglasie.repository.AgentAgreementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AgentAgreementService {

    @Autowired
    private AgentAgreementRepository agentAgreementRepository;

    public AgentAgreement createAgentAgreement(AgentAgreement agentAgreement) {
        return agentAgreementRepository.save(agentAgreement);
    }
}
