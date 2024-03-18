package com.razbezhkin.shop.service;

import com.razbezhkin.shop.common.mapper.EntityMapper;
import com.razbezhkin.shop.domain.Product;
import com.razbezhkin.shop.exception.NotFoundException;
import com.razbezhkin.shop.repository.product.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final EntityMapper entityMapper;
    private final ProductRepository productRepository;

    public List<Product> getAll() {
        return productRepository.findAll().stream()
            .map(entityMapper::toProduct)
            .collect(Collectors.toList());
    }

    public Product getById(Integer id) {
        return productRepository.findById(id)
            .map(entityMapper::toProduct)
            .orElseThrow(() -> new NotFoundException("Product", id));
    }
}
