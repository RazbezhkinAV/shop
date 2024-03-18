package com.razbezhkin.shop.controller;

import lombok.Builder;

import java.util.List;

@Builder
public record ProductDto(Integer id,
                         String name,
                         List<String> ingredients,
                         String image,
                         Double rating
) {}
