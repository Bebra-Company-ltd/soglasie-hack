package com.soglasie.entity;

import com.soglasie.enums.LineOfBusiness;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "products")
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "product_id")
    private int id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "LOB_id", nullable = false)
    private LineOfBusiness LOBid;

    @OneToMany(fetch = FetchType.EAGER)
    @Column(name = "risk_ids")
    private List<Risk> risks;

    @OneToMany(fetch = FetchType.EAGER)
    @Column(name = "product_metafields")
    private List<ProductMetafield> productMetafields;

    @OneToMany(fetch = FetchType.EAGER)
    private List<Tariff> tariffs;

    @OneToMany(fetch = FetchType.EAGER)
    private List<AdditionalTariff> additionalTariffs;

    @Column(name = "percentForDay")
    private Double percentForDay;
}
