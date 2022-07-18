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
public class Problem extends BaseEntity {
    @Id
    @GeneratedValue
    @Column(name = "PROBLEM_PK", nullable = false)
    private long problem_pk;

    @Column(name = "PROBLEM_NAME", nullable = false)
    private char problem_name;

    @Column(name = "PROBLEM_NUMBER", nullable = false)
    private long problem_number;
}
