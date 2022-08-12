package com.algorithm.server.db.entity;

import com.algorithm.server.common.BaseEntity;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table
public class User extends BaseEntity {
    @Id
    @GeneratedValue
    @Column(name = "USER_PK", nullable = false)
    private long user_pk;

    @Column(name = "USER_ID", nullable = false)
    private char id;

    @Column(name = "USER_PW", nullable = false)
    private char pw;

    @Column(name = "USER_TOKEN", nullable = false)
    private char token;

    @Column(name = "USER_NAME", nullable = false)
    private char name;



}