package com.soglasie.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "tariffs")
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

    @ElementCollection(fetch = FetchType.EAGER)  // Загрузка немедленная
    @CollectionTable(name = "tariff_options", joinColumns = @JoinColumn(name = "id"))
    @Column(name = "options")
    private List<String> options;
}
