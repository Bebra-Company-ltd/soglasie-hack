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

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "second_name")
    private String secondName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "date_birth")
    private Date dateBirth;

    @Column(name = "name")
    private String name;

    @Column(name = "INN")
    private int INN;
}
