package com.soglasie.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "contractRisks")
@Data
public class ContractRisk {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "contract_risk_id")
    private int id;

    @OneToOne
    @Column(name = "contract_id", nullable = false)
    private Contract contractId;

    @OneToOne
    @Column(name = "risk_id", nullable = false)
    private Risk riskId;

    @Column(name = "premium")
    private Double premium;

    @Column(name = "insurance_sum")
    private Double insuranceSum;
}
