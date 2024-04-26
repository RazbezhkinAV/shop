package com.razbezhkin.shop.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class NotFoundException extends RuntimeException {
    public NotFoundException(String entityName, Integer id) {
        super(entityName + ", not found by id: " + id);
    }

    public NotFoundException(String entityName, String fieldValue) {
        super(entityName + ", not found by " + fieldValue);
    }
}
