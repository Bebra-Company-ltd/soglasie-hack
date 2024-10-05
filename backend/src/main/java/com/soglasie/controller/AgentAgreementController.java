package com.soglasie.controller;

import com.soglasie.entity.AgentAgreement;
import com.soglasie.service.AgentAgreementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/agentAgreement")
public class AgentAgreementController {

    @Autowired
    private AgentAgreementService agentAgreementService;

    @PostMapping("/createAgentAgreement")
    public AgentAgreement createAgentAgreement(@RequestBody AgentAgreement agentAgreement) {
        return agentAgreementService.createAgentAgreement(agentAgreement);
    }

    @GetMapping("/getAllAgentAgreements")
    public List<AgentAgreement> getAllAgentAgreements() {
        return agentAgreementService.getAllAgentAgreements();
    }

    @PatchMapping("/updateAgentAgreement")
    public AgentAgreement updateAgentAgreement(@RequestBody AgentAgreement agentAgreement) {
        return agentAgreementService.updateAgentAgreement(agentAgreement);
    }
}
