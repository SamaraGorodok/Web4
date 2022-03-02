package com.example.web4backend.security;

import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.context.annotation.SessionScope;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@Component
public class SecurityFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try {
            log.info(request.getHeader("secret"));
            log.info(request.getServletPath());
            if (request.getServletPath().equals("/user/login") || request.getServletPath().equals("/user/register")) {

                filterChain.doFilter(request, response);
            } else {
                if (request.getHeader("secret") != null || request.getParameter("secret").equals("NineCatLivesGotNineSilverKnives")) {
                    filterChain.doFilter(request, response);
                } else {
                    response.sendError(401);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            response.sendError(400, e.toString());
        }
    }


}

