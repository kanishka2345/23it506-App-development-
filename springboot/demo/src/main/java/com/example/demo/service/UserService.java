// src/main/java/com/example/demo/service/UserService.java
package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // public boolean authenticate(String email, String password) {
    //     User user = userRepository.findByEmail(email);
    //     return user != null && user.getPassword().equals(password);
    // }
    public User registerService(User user) {
        return userRepository.save(user);
    }
    public User loginService(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }
}
