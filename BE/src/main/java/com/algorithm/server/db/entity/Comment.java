package com.algorithm.server.db.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class Comment {
    @Id
    @GeneratedValue
    @Column(name = "COMMENT_PK", nullable = false)
    private long comment_pk;

    @Column(name = "COMMENT_DISCRIPTION", nullable = false)
    private char comment_discription;

    @ManyToOne(targetEntity = User.class, fetch = FetchType.LAZY)
    @JoinColumn(name="USER_PK")
    private User user;

    @ManyToOne(targetEntity = Board.class, fetch = FetchType.LAZY)
    @JoinColumn(name="BOARD_PK")
    private Board board;
}
