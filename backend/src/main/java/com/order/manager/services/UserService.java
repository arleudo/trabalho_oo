package com.order.manager.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.order.manager.models.DTO.UserDTO;
import com.order.manager.models.User;
import com.order.manager.repositories.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users;
    }

    public User login(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user != null) {
            if(password.matches(user.getPassword())){
                return user;
            }
        }
        return null;
    }

    public User create(UserDTO dto){
        User user = new User();
        user.setName(dto.getName());
        user.setPassword(dto.getPassword());
        user.setEmail(dto.getEmail());

        return userRepository.save(user);
    }
}
