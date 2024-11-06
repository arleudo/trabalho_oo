package com.order.manager.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.order.manager.models.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}

