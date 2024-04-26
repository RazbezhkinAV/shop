package com.razbezhkin.shop.common.mapper;

import com.razbezhkin.shop.controller.product.ProductDto;
import com.razbezhkin.shop.domain.product.Product;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface DtoMapper {

    ProductDto toProductDto(Product product);
}
