package com.razbezhkin.shop.repository.product;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ProductRepositoryImpl implements ProductRepository {

    private final List<ProductEntity> CASHE = List.of(
        ProductEntity.builder()
            .id(1)
            .name("Питса")
            .ingredients(List.of("Укроп", "Кошачья жопа", "25 картошек"))
            .image("https://cdn-bucket.hb.ru-msk.vkcs.cloud/purple-images/demo/food/food1.png")
            .rating(4.9)
            .build(),
        ProductEntity.builder()
            .id(2)
            .name("Мандалорец")
            .ingredients(List.of("17 мандавошек", "Ведро воды"))
            .image("https://cdn-bucket.hb.ru-msk.vkcs.cloud/purple-images/demo/food/food2.png")
            .rating(4.5)
            .build(),
        ProductEntity.builder()
            .id(3)
            .name("Пацанская")
            .ingredients(List.of("Огурцы", "Помидоры"))
            .image("https://cdn-bucket.hb.ru-msk.vkcs.cloud/purple-images/demo/food/food3.png")
            .rating(4.0)
            .build(),
        ProductEntity.builder()
            .id(4)
            .name("Она самая")
            .ingredients(List.of("Виноград", "Сливы", "Яблоки"))
            .image("https://cdn-bucket.hb.ru-msk.vkcs.cloud/purple-images/demo/food/food4.png")
            .rating(4.0)
            .build()
    );

    @Override
    public List<ProductEntity> findAll() {
        return CASHE;
    }

    @Override
    public Optional<ProductEntity> findById(Integer id) {
        return CASHE.stream()
            .filter(it -> it.getId().equals(id))
            .findFirst();
    }
}
