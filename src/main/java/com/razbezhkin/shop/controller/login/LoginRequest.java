package com.razbezhkin.shop.controller.login;

import lombok.Builder;

@Builder
public record LoginRequest (String email, String password) {

}
