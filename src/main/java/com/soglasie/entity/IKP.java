package com.soglasie.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "IKPs")
@Data
public class IKP {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "IKP_id")
    private int id;

    @Column(name = "name", nullable = false)
    private String name;
}
