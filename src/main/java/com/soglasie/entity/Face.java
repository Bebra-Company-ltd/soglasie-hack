package com.soglasie.entity;

import com.soglasie.enums.Type;
import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;

@Entity
@Table(name = "faces")
@Data
public class Face {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "face_id")
    private int id;

    @Column(name = "type", nullable = false)
    private Type type;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "secondName")
    private String secondName;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "dateBirth")
    private Date dateBirth;

    @Column(name = "name")
    private String name;

    @Column(name = "INN")
    private int INN;
}
