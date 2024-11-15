package com.order.manager.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.order.manager.models.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}

