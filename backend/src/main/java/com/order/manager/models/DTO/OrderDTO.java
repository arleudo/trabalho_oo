package com.order.manager.models.DTO;

import java.util.List;

public class OrderDTO {
	
	private Long userId;
    private List<OrderItemDTO> items;
    private double value;

    public OrderDTO() {}

    public OrderDTO(Long userId, List<OrderItemDTO> items) {
        this.userId = userId;
        this.items = items;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public List<OrderItemDTO> getItems() {
        return items;
    }

    public void setItems(List<OrderItemDTO> items) {
        this.items = items;
    }

	public double getValue() {
		return value;
	}

	public void setValue(double value) {
		this.value = value;
	}
      
}
