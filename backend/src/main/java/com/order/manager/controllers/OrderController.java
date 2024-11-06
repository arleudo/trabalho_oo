package com.order.manager.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.order.manager.models.DTO.OrderDTO;
import com.order.manager.models.Order;
import com.order.manager.services.OrderService;

@RestController
@RequestMapping("/orders")
public class OrderController {
	
	@Autowired
    private OrderService orderService;

    @GetMapping
    public List<Order> getAll() {
        return orderService.getAll();
    }

    @PostMapping()
    public Order create(@RequestBody OrderDTO dto) {
        Order p = orderService.create(dto);
        return p;
    }
}

