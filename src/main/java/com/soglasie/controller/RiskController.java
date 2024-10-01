package com.soglasie.controller;

import com.soglasie.entity.Risk;
import com.soglasie.service.RiskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/risk")
public class RiskController {

    @Autowired
    private RiskService riskService;

    @PostMapping("/createRisk")
    public Risk createRisk(@RequestBody Risk risk) {
        return riskService.createRisk(risk);
    }

    @GetMapping("/getAllRisk")
    public List<Risk> getAllRisk() {
        return riskService.getAllRisks();
    }

    @GetMapping("/getRiskById/{id}")
    public Optional<Risk> getRiskById(@PathVariable int id) {
        return riskService.getRiskById(id);
    }

    @DeleteMapping("/deleteRiskById/{id}")
    public void deleteRiskById(@PathVariable int id) {
        riskService.deleteRiskById(id);
    }
}
