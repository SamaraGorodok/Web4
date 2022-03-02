package com.example.web4backend.dto;

import lombok.Data;

@Data
public class AuthDto  {
    @Override
    public String toString() {
        return "AuthDto{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

    private String username;
    private String password;
}
