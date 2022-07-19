package com.algorithm.server.db.entity;

import com.algorithm.server.common.BaseEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class Study extends BaseEntity {

    @Id
    @GeneratedValue
    @Column(name = "STUDY_PK", nullable = false)
    private long study_pk;

    @Column(name = "STUDY_NAME", nullable = false)
    private char study_name;

    @Column(name = "STUDY_DISCRIPTION", nullable = false)
    private char study_discription;
}
