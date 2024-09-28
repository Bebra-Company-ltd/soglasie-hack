package com.soglasie.entity;

import com.soglasie.enums.Status;
import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;
import java.util.List;

@Entity
@Table(name = "contracts")
@Data
public class Contract {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "contract_id")
    private int id;

    @Column(name = "date_create", nullable = false)
    private Date dateCreate;

    @Column(name = "date_sign")
    private Date dateSign;

    @OneToMany
    @Column(name = "products_id", nullable = false)
    private List<Product> productsId;

    @Column(name = "date_begin")
    private Date dateBegin;

    @Column(name = "date_end")
    private Date dateEnd;

    @Column(name = "premium")
    private Double premium;

    @Column(name = "insurance_sum")
    private Double insuranceSum;

    @ManyToOne
    @Column(name = "agent_id", nullable = false)
    private Agent agentId;

    @Column(name = "rate")
    private Double rate;

    @Column(name = "commission")
    private Double commission;

    @Column(name = "status", nullable = false)
    private Status status;

    @ManyToOne
    @Column(name = "policy_holder_id")
    private Face policyHolderId;

    @ManyToOne
    @Column(name = "insured_policy_id")
    private Face insuredPolicyId;

    @ManyToOne
    @Column(name = "owner_id")
    private Face ownerId;
}
