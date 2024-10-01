package com.soglasie.entity;

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
}
