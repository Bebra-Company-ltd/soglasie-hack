package com.soglasie.entity;

import com.soglasie.enums.Status;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "agents")
@Data
public class Agent {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "agent_id")
    private int id;

//    @OneToMany
//    @Column(name = "face_ids")
//    private List<Face> faceId;

    @ManyToOne
    @JoinColumn(name = "ikp_id", nullable = false)
    private IKP IKPid;

    @OneToOne(mappedBy = "agentId")
    @JoinColumn(name = "agent_agreement_id", nullable = false)
    private AgentAgreement agentAgreement;

    @Column(name = "status_id", nullable = false)
    private Status statusId;

    @Column(name = "date_create", nullable = false)
    private Date dateCreate;

    @Column(name = "date_begin")
    private Date dateBegin;

    @Column(name = "date_end")
    private Date dateEnd;

}
