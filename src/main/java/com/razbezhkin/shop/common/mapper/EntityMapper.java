package com.razbezhkin.shop.common.mapper;

import com.razbezhkin.shop.domain.Product;
import com.razbezhkin.shop.repository.product.ProductEntity;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface EntityMapper {

    Product toProduct(ProductEntity entity);
}
