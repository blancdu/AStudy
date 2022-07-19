package com.algorithm.server.db.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class Board {
    @Id
    @GeneratedValue
    @Column(name = "BOARD_PK", nullable = false)
    private long board_pk;

    @Column(name = "BOARD_TITLE", nullable = false)
    private char board_title;

    @Column(name = "BOARD_DISCRIPTION", nullable = false)
    private char board_discription;

    @ManyToOne(targetEntity = User.class, fetch = FetchType.LAZY)
    @JoinColumn(name="USER_PK")
    private User user;
}
