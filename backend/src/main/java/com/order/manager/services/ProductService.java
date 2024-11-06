package com.order.manager.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.order.manager.models.DTO.ProductDTO;
import com.order.manager.models.Product;
import com.order.manager.repositories.ProductRepository;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAll() {
        List<Product> products = productRepository.findAll();
        return products;
    }    

    public Product create(ProductDTO dto){
        Product p = new Product();
        p.setDescription(dto.getDescription());
        p.setValue(dto.getValue());

        return productRepository.save(p);
    }
}
