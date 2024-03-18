package com.razbezhkin.shop.common.mapper;

import com.razbezhkin.shop.controller.ProductDto;
import com.razbezhkin.shop.domain.Product;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface DtoMapper {

    ProductDto toProductDto(Product product);
}
