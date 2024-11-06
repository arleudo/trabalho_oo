package com.order.manager.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.order.manager.models.DTO.ProductDTO;
import com.order.manager.models.Product;
import com.order.manager.services.ProductService;

@RestController
@RequestMapping("/products")
public class ProductController {
    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping
    public List<Product> getAll() {
        return service.getAll();
    }

    @PostMapping("/")
    public Product create(@RequestBody ProductDTO dto) {
        Product p = this.service.create(dto);
        return p;
    }
}

