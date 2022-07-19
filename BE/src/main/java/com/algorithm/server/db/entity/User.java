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
public class User extends BaseEntity {
    @Id
    @GeneratedValue
    @Column(name = "USER_PK", nullable = false)
    private long user_pk;

    @Column(name = "USER_ID", nullable = false)
    private char id;

    @Column(name = "USER_TOKEN", nullable = false)
    private char token;

    @Column(name = "USER_NAME", nullable = false)
    private char name;
}
