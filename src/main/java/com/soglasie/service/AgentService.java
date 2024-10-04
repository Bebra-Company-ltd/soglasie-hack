package com.soglasie.service;

import com.soglasie.entity.Agent;
import com.soglasie.entity.AgentAgreement;
import com.soglasie.enums.LineOfBusiness;
import com.soglasie.repository.AgentAgreementRepository;
import com.soglasie.repository.AgentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AgentService {

    @Autowired
    private AgentRepository agentRepository;


    @Autowired
    private AgentAgreementRepository agentAgreementRepository;

    public Agent createAgent(Agent request, LineOfBusiness lineOfBusiness, Double rate) {
        Agent agent = new Agent();

        agent.setFirstName(request.getFirstName());
        agent.setLastName(request.getLastName());
        agent.setEmail(request.getEmail());
        agent.setSecondName(request.getSecondName());
        agent.setPhone(request.getPhone());
        agent.setDateBirth(request.getDateBirth());
        agent.setIKPid(request.getIKPid());
        agent.setStatusId(request.getStatusId());
        agent.setDateCreate(request.getDateCreate());
        agent.setDateBegin(request.getDateBegin());
        agent.setDateEnd(request.getDateEnd());

        AgentAgreement agentAgreement = new AgentAgreement();
        agentAgreement.setAgentId(agent);
        agentAgreement.setLOBid(lineOfBusiness);
        agentAgreement.setRate(rate);

        agent = agentRepository.save(agent);
        agentAgreementRepository.save(agentAgreement);

        return agent;
    }

    public List<Agent> getAllAgents() {
        return agentRepository.findAll();
    }

    public void deleteAgentById(Integer id) {
        Agent agent = agentRepository.findById(id).get();

        List<AgentAgreement> agentAgreements = agentAgreementRepository.findByAgentId(agent);

        for (AgentAgreement agentAgreement1 : agentAgreements) {
            agentAgreementRepository.deleteById(agentAgreement1.getId());
        }

        agentRepository.deleteById(id);
    }

    public Optional<Agent> getAgentById(Integer id) {
        return agentRepository.findById(id);
    }

}
