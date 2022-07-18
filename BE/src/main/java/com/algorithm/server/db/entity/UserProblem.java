package com.algorithm.server.db.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class UserProblem {

    @Id
    @GeneratedValue
    @Column(name = "USER_PROBLEM_PK", nullable = false)
    private long user_problem_pk;

//    @ManyToOne(targetEntity = User.class, fetch = FetchType.LAZY)
//    @JoinColumn(name="USER_PK")
//    private User user;
//
//    @ManyToOne(targetEntity = Study.class, fetch = FetchType.LAZY)
//    @JoinColumn(name="STUDY_PK")
//    private Study study;
}
