package com.example.web4backend.repo;

import com.example.web4backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface UserRepo extends JpaRepository<User,Long> {
    boolean existsByUsernameAndPassword(String username,String password);
    boolean existsByUsername(String username);
    User findUserByUsername(String username);
}
