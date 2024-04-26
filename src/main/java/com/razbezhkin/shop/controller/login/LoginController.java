package com.razbezhkin.shop.controller.login;

import com.razbezhkin.shop.domain.user.User;
import com.razbezhkin.shop.service.jwt.JwtService;
import com.razbezhkin.shop.service.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping(value = "${com.shop.base.api.path}/auth", produces = "application/json")
@RestController
@RequiredArgsConstructor
public class LoginController {

    private final UserService userService;

    @PostMapping("/login")
    public LoginResponseDto getAllAccounts(@RequestBody LoginRequest request) {
        User user = userService.getUserByEmail(request.email());
        return LoginResponseDto.builder()
            .login(user.getLogin())
            .email(user.getEmail())
            .token(JwtService.generateToken(user))
            .build();
    }
}
