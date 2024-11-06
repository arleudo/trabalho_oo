package com.order.manager.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.order.manager.models.DTO.LoginDTO;
import com.order.manager.models.DTO.UserDTO;
import com.order.manager.models.User;
import com.order.manager.services.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("/login")
    public User login(@RequestBody LoginDTO dto) {
        User user = this.userService.login(dto.getEmail(), dto.getPassword());
        user.setPassword("");
        return user;
    }

    @PostMapping("/")
    public User create(@RequestBody UserDTO dto) {
        User user = this.userService.create(dto);
        return user;
    }
}

