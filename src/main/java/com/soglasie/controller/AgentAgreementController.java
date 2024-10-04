package com.soglasie.controller;

import com.soglasie.entity.AgentAgreement;
import com.soglasie.service.AgentAgreementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/agentAgreement")
public class AgentAgreementController {

    @Autowired
    private AgentAgreementService agentAgreementService;

    @PostMapping("/createAgentAgreement")
    public AgentAgreement createAgentAgreement(@RequestBody AgentAgreement agentAgreement) {
        return agentAgreementService.createAgentAgreement(agentAgreement);
    }
}
