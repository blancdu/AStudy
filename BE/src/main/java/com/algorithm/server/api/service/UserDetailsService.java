package com.algorithm.server.api.service;


import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface UserDetailsService  {

    // 유저이름이 없다면 에러를 던지고 아니면 username을 던진다
    UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;
}
