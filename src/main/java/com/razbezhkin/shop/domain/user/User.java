package com.razbezhkin.shop.domain.user;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class User {
    private final String login;
    private final String password;
    private final String email;
}
