package com.order.manager.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.order.manager.models.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
}

