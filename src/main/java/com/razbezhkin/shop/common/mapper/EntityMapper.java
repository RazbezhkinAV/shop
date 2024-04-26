package com.razbezhkin.shop.common.mapper;

import com.razbezhkin.shop.domain.product.Product;
import com.razbezhkin.shop.domain.user.User;
import com.razbezhkin.shop.repository.product.ProductEntity;
import com.razbezhkin.shop.repository.user.UserEntity;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface EntityMapper {

    Product toProduct(ProductEntity entity);
    User toUser(UserEntity entity);
}
