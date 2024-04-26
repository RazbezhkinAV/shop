package com.razbezhkin.shop.domain.product;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class Product {
    private final Integer id;
    private final String name;
    private final List<String> ingredients;
    private final String image;
    private final Double rating;
}
