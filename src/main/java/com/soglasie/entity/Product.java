package com.soglasie.entity;

import com.soglasie.enums.LineOfBusiness;
import jakarta.persistence.*;
import lombok.Data;

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
}
