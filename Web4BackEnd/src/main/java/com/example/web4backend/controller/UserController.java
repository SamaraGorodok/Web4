package com.example.web4backend.controller;

import com.example.web4backend.dto.AuthDto;
import com.example.web4backend.dto.SecretKeyDto;
import com.example.web4backend.entity.User;
import com.example.web4backend.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@Slf4j
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/user")
public class UserController {

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    AuthenticationManager authenticationManager;

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    ResponseEntity userLogin(@RequestBody AuthDto authDto, HttpServletResponse response) {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(
                        authDto.getUsername(),
                        authDto.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        log.info(authDto.toString());
//        User user = new User(authDto.getUsername(), authDto.getPassword());
        User user = (User) authentication.getPrincipal();

//        if (userService.existsByUsernameAndPassword(authDto.getUsername(), authDto.getPassword())) {
//            return ResponseEntity.ok().body(new SecretKeyDto());
//        }
        return ResponseEntity.ok().body(new SecretKeyDto());//return ResponseEntity.badRequest().body(user.getUsername());
    }

    @PostMapping("/register")
    ResponseEntity registerUser(@RequestBody AuthDto authDto) {
        User user = new User(authDto.getUsername(), passwordEncoder.encode(authDto.getPassword()));
        if (userService.existsByUsername(authDto.getUsername())) {
            return ResponseEntity.badRequest().body("User already exist");
        } else {
            userService.registerUser(user);
            return ResponseEntity.ok().build();
        }
    }

    //check (fields)
    //clear


}
