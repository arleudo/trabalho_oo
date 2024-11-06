package com.order.manager.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String description;
    private double value;
    private String srcImage;
    
    public Product() {
    }
    
    public Product(Long id, String description, double value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getValue() {
        return value;
    }

    public void setValue(double value) {
        this.value = value;
    }

	public String getSrcImage() {
		return srcImage;
	}

	public void setSrcImage(String srcImage) {
		this.srcImage = srcImage;
	}
}