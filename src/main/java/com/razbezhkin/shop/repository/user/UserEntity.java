package com.razbezhkin.shop.repository.user;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class UserEntity {
    private final String login;
    private final String email;
    private final String password;
}
