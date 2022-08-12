package com.algorithm.server.db.repository;

import com.algorithm.server.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User getByUserName(String username);
}
