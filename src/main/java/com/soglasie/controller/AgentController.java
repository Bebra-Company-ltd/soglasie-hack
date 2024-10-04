package com.soglasie.controller;

import com.soglasie.entity.Agent;
import com.soglasie.enums.LineOfBusiness;
import com.soglasie.service.AgentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/agents")
public class AgentController {

    @Autowired
    private AgentService agentService;

    @PostMapping("/createAgent/{lineOfBusiness}/{rate}")
    public Agent createAgent(@RequestBody Agent agent, @PathVariable LineOfBusiness lineOfBusiness,
                             @PathVariable Double rate) {
        return agentService.createAgent(agent, lineOfBusiness, rate);
    }

    @GetMapping("/getAllAgents")
    public List<Agent> getAllAgents() {
        return agentService.getAllAgents();
    }

    @DeleteMapping("/deleteAgentById/{id}")
    public void deleteAgentById(@PathVariable Integer id) {
        agentService.deleteAgentById(id);
    }

    @GetMapping("/getAgentById/{id}")
    public Optional<Agent> getAgentById(@PathVariable Integer id) {
        return agentService.getAgentById(id);
    }

    @PatchMapping("/updateAgent")
    public Agent updateAgent(@RequestBody Agent agent) {
        return agentService.updateAgent(agent);
    }
}
