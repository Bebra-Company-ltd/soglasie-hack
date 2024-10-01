package com.soglasie.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "IKPs")
@Data
public class IKP {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ikp_id")
    private int id;

    @Column(name = "name", nullable = false)
    private String name;

    @OneToMany(mappedBy = "IKPid")
    @JsonIgnore
    private List<Agent> agents;
}
