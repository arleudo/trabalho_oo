package com.order.manager.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.order.manager.models.DTO.OrderDTO;
import com.order.manager.models.DTO.OrderItemDTO;
import com.order.manager.models.Order;
import com.order.manager.models.OrderItem;
import com.order.manager.models.Product;
import com.order.manager.models.User;
import com.order.manager.repositories.OrderRepository;
import com.order.manager.repositories.ProductRepository;
import com.order.manager.repositories.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class OrderService {
	@Autowired
    private OrderRepository orderRepository;
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    public List<Order> getAll() {
        List<Order> orders = orderRepository.findAll();
        return orders;
    }    

    @Transactional
    public Order create(OrderDTO orderDTO){
        User usuario = userRepository.findById(orderDTO.getUserId())
            .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        Order pedido = new Order();
        pedido.setUser(usuario);

        List<OrderItem> itensPedido = new ArrayList<>();
        for (OrderItemDTO itemDTO : orderDTO.getItems()) {
            Product produto = productRepository.findById(itemDTO.getProductId())
                .orElseThrow(() -> new RuntimeException("Produto não encontrado"));

            OrderItem itemPedido = new OrderItem();
            itemPedido.setOrder(pedido);
            itemPedido.setProduct(produto);
            itemPedido.setQuantidade(itemDTO.getQuantity());
            
            itensPedido.add(itemPedido);
        }
        pedido.setItens(itensPedido);

        return orderRepository.save(pedido);
    }
}
