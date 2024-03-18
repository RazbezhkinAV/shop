package com.razbezhkin.shop.repository.product;

import java.util.List;

public interface ProductRepository {
    List<ProductEntity> findAll();
}
