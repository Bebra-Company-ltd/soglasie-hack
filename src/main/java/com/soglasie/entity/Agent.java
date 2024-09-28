package com.soglasie.entity;

import com.soglasie.enums.Status;
import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;
import java.util.List;

@Entity
@Table(name = "agents")
@Data
public class Agent {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "agent_id")
    private int id;

    @OneToMany
    @Column(name = "faceIds", nullable = false)
    private List<Face> faceId;

    @OneToOne
    @Column(name = "IKPid", nullable = false)
    private IKP IKPid;

    @Column(name = "statusId", nullable = false)
    private Status statusId;

    @Column(name = "dateCreate", nullable = false)
    private Date dateCreate;

    @Column(name = "dateBegin")
    private Date dateBegin;

    @Column(name = "dateEnd")
    private Date dateEnd;
}
