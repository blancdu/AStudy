package com.algorithm.server.db.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Getter
@Setter
public class UserStudy {

    @Id
    @GeneratedValue
    @Column(name = "USER_STUDY_PK", nullable = false)
    private long user_study_pk;

    @ManyToOne(targetEntity = User.class, fetch = FetchType.LAZY)
    @JoinColumn(name="USER_PK")
    private User user;

    @ManyToOne(targetEntity = Problem.class, fetch = FetchType.LAZY)
    @JoinColumn(name="PROBLEM_PK")
    private Problem problem;
}
