package com.soglasie.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "additionalTariff")
@Data
public class AdditionalTariff {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "minInsuranceSum")
    private Double minInsuranceSum;

    @Column(name = "maxInsuranceSum")
    private Double maxInsuranceSum;

    @Column(name = "totalInsuranceSum")
    private Double totalInsuranceSum;

    @ManyToOne
    private Product product;
}
