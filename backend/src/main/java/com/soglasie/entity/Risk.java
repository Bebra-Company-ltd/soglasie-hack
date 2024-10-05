package com.soglasie.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "risks")
@Data
public class Risk {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "risk_id")
    private int id;

    @Column(name = "name", nullable = false)
    private String name;

    @OneToOne
    @JoinColumn(name = "contract_id")
    @JsonIgnore
    private Contract contractId;

    @Column(name = "rate")
    private Double rate;

    @Column(name = "insurance_sum")
    private Double insuranceSum;

    @ManyToOne(fetch = FetchType.LAZY)
//    @JsonIgnore
    @JsonIgnore
    private Product product;
}
