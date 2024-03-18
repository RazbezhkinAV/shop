package com.razbezhkin.shop.controller;

import com.razbezhkin.shop.common.mapper.DtoMapper;
import com.razbezhkin.shop.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping(value = "${com.shop.base.api.path}/products", produces = "application/json")
@RestController
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;
    private final DtoMapper dtoMapper;

    @GetMapping()
    public List<ProductDto> getAllAccounts() {
        return productService.getAll()
            .stream()
            .map(dtoMapper::toProductDto)
            .toList();
    }

    @GetMapping({"/{id}"})
    public ProductDto getProductById(@PathVariable Integer id) {
        return dtoMapper.toProductDto(productService.getById(id));
    }
}
