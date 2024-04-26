package com.razbezhkin.shop.repository.user;

import java.util.Optional;

public interface UserRepository{
    Optional<UserEntity> findByEmail(String email);
}
