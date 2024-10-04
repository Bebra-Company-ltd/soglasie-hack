package com.soglasie.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "rates")
@Data
public class Tariff {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "insuranceSum")
    private Double insuranceSum;

    @Column(name = "rate")
    private Double rate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    private Product product;
}
