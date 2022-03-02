package com.example.web4backend.service;

import com.example.web4backend.entity.Entry;
import com.example.web4backend.entity.User;
import com.example.web4backend.repo.UserRepo;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Data
@Service
@Transactional
public class UserService implements UserDetailsService {
    private final UserRepo userRepo;

    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public boolean existsByUsernameAndPassword(String username, String password) {
        return userRepo.existsByUsernameAndPassword(username, password);
    }

    public void registerUser(User user) {
        userRepo.save(user);
    }

    public boolean existsByUsername(String username) {
        return userRepo.existsByUsername(username);
    }

    public User findUserByUsername(String username) {
        return userRepo.findUserByUsername(username);
    }


    public List<Entry> getUserEntries(String username) {
        return userRepo.findUserByUsername(username).getEntries();
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepo.findUserByUsername(username);
        return user;
    }
}
