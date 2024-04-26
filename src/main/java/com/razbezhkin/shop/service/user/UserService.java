package com.razbezhkin.shop.service.user;

import com.razbezhkin.shop.common.mapper.EntityMapper;
import com.razbezhkin.shop.domain.user.User;
import com.razbezhkin.shop.exception.NotFoundException;
import com.razbezhkin.shop.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final EntityMapper entityMapper;
    private final UserRepository userRepository;

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
            .map(entityMapper::toUser)
            .orElseThrow(() -> new NotFoundException("User with email", email));
    }
}
