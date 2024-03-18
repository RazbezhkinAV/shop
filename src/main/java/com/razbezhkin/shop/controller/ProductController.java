package com.razbezhkin.shop.controller;

import com.razbezhkin.shop.common.mapper.DtoMapper;
import com.razbezhkin.shop.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping(value = "${com.shop.base.api.path}", produces = "application/json")
@RestController
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;
    private final DtoMapper dtoMapper;

    @GetMapping(value = "/products")
    public List<ProductDto> getAllAccounts() {
        return productService.getAll()
            .stream()
            .map(dtoMapper::toProductDto)
            .toList();
    }
}
