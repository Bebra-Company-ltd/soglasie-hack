package com.soglasie.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "products_id", nullable = false)
    private Product productId;

    @ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @Column(name = "contract_risks_ids")
    private List<Risk> risks;

    @ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @Column(name = "productMetafields")
    private List<ProductMetafield> productMetafields;

    @ManyToOne(cascade = CascadeType.MERGE)
    private Tariff tariff;

    @ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    private List<AdditionalTariff> additionalTariffs;

    @Column(name = "date_begin")
    private Date dateBegin;

    @Column(name = "date_end")
    private Date dateEnd;

    @Column(name = "premium")
    private Double premium;

    @Column(name = "insurance_sum")
    private Double insuranceSum;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "agent_id", nullable = false)
    private Agent agentId;

    @Column(name = "rate")
    private Double rate;

    @Column(name = "commission")
    private Double commission;

    @Column(name = "status", nullable = false)
    private Status status;

    @ManyToOne
    @JoinColumn(name = "policy_holder_id")
    private Face policyHolderId;

    @ManyToOne
    @JoinColumn(name = "insured_policy_id")
    private Face insuredPolicyId;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private Face ownerId;
}
