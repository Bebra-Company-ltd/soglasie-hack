package com.soglasie.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.soglasie.enums.LineOfBusiness;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "agentAgreements")
@Data
public class AgentAgreement {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "agent_agreement_id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "agent_id", nullable = false)
    @JsonIgnore
    private Agent agentId;

    @Column(name = "LOB_id", nullable = false)
    private LineOfBusiness LOBid;

    @Column(name = "rate", nullable = false)
    private Double rate;
}
