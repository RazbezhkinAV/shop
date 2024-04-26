package com.razbezhkin.shop.controller.login;

import lombok.Builder;

@Builder
public record LoginResponseDto(String token, String login, String email) {
}
