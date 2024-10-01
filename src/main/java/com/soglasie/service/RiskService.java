package com.soglasie.service;

import com.soglasie.entity.Risk;
import com.soglasie.repository.RiskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RiskService {

    @Autowired
    private RiskRepository riskRepository;

    public Risk createRisk(Risk risk) {
        return riskRepository.save(risk);
    }

    public Optional<Risk> getRiskById(int id) {
        return riskRepository.findById(id);
    }

    public List<Risk> getAllRisks() {
        return riskRepository.findAll();
    }

    public void deleteRiskById(int id) {
        riskRepository.deleteById(id);
    }
}
