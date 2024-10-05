package com.soglasie.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "productMetafields")
@Data
public class ProductMetafield {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "product_metafield_id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "stringValue")
    private String stringValue;

    @Column(name = "doubleValue")
    private Double doubleValue;

    @Column(name = "booleanValue")
    private Boolean booleanValue;

    @Column(name = "premium")
    private Double rate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private Product product;
}
