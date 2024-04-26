package com.razbezhkin.shop.repository.user;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class UserRepositoryImpl implements UserRepository {

    private final List<UserEntity> CASH = new ArrayList<>();

    @PostConstruct
    public void init() {
        CASH.add(
            UserEntity.builder()
                .login("admin")
                .email("admin")
                .password("admin")
                .build()
        );
    }

    @Override
    public Optional<UserEntity> findByEmail(String email) {
        return CASH.stream()
            .filter(it -> it.getEmail().equals(email))
            .findFirst();
    }
}
