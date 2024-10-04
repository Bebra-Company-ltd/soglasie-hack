package com.soglasie.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.soglasie.enums.Status;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "agents")
@Data
public class Agent {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "agent_id")
    private int id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "second_name", nullable = false)
    private String secondName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "phone", nullable = false)
    private String phone;

    @Column(name = "date_birth", nullable = false)
    private Date dateBirth;

    @OneToMany(mappedBy = "agent", fetch = FetchType.EAGER)
    @Column(name = "face_ids")
    private List<Face> faceId;

    @OneToMany(mappedBy = "agentId", fetch = FetchType.LAZY)
    @Column(name = "contracts_ids")
    @JsonIgnore
    private List<Contract> contracts;

    @ManyToOne
    @JoinColumn(name = "ikp_id", nullable = false)
    private IKP IKPid;

    @OneToMany(mappedBy = "agentId",fetch = FetchType.LAZY)
    @Column(name = "agent_agreements_id", nullable = false)
    @JsonIgnore
    private List<AgentAgreement> agentAgreements;

    @Column(name = "status_id", nullable = false)
    private Status statusId;

    @Column(name = "date_create", nullable = false)
    private Date dateCreate;

    @Column(name = "date_begin")
    private Date dateBegin;

    @Column(name = "date_end")
    private Date dateEnd;

}
