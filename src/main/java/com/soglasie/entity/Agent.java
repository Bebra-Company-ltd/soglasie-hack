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
    @Column(name = "face_ids", nullable = false)
    private List<Face> faceId;

    @OneToOne
    @JoinColumn(name = "IKP_id", nullable = false)
    private IKP IKPid;

    @Column(name = "status_id", nullable = false)
    private Status statusId;

    @Column(name = "date_create", nullable = false)
    private Date dateCreate;

    @Column(name = "date_begin")
    private Date dateBegin;

    @Column(name = "date_end")
    private Date dateEnd;
}
