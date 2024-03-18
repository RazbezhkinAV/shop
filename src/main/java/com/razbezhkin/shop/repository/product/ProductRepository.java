package com.razbezhkin.shop.repository.product;

import java.util.List;
import java.util.Optional;

public interface ProductRepository {
    List<ProductEntity> findAll();

    Optional<ProductEntity> findById(Integer id);
}
