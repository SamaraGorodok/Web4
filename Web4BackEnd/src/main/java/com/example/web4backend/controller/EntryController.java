package com.example.web4backend.controller;

import com.example.web4backend.dto.EntryReqDto;
import com.example.web4backend.entity.Entry;
import com.example.web4backend.entity.User;
import com.example.web4backend.exceptions.NotIncludedInTheRangeException;
import com.example.web4backend.model.AreaChecker;
import com.example.web4backend.service.EntryService;
import com.example.web4backend.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/entry")
public class EntryController {
    final
    AreaChecker areaChecker;
    final
    EntryService entryService;
    final
    UserService userService;

    @Autowired
    public EntryController(AreaChecker areaChecker, EntryService entryService, UserService userService) {
        this.areaChecker = areaChecker;
        this.entryService = entryService;
        this.userService = userService;
    }

    @PostMapping("/check")
    ResponseEntity checkEntry(@RequestBody EntryReqDto entryReqDto, HttpServletRequest request) {
        try {

            String username = request.getHeader("username");
            User user = userService.findUserByUsername(username);
            Entry newEntry = areaChecker.checkEntry(entryReqDto, System.currentTimeMillis());
            log.info(newEntry.toString());
            synchronized (user){
                user.getEntries().add(newEntry);
            }
            entryService.saveEntry(newEntry);
            return ResponseEntity.ok(newEntry);
        } catch (NotIncludedInTheRangeException e) {
            return ResponseEntity.badRequest().body(e);
        }
    }

    @GetMapping("/getAll")
    ResponseEntity getUserEntries(HttpServletRequest request) {
        String username = request.getHeader("username");
        return ResponseEntity.ok(userService.getUserEntries(username));
    }


    @GetMapping("/clear")
    ResponseEntity clearEntries(HttpServletRequest request) {
        String username = request.getHeader("username");
        entryService.clear(username);
        return ResponseEntity.ok().build();
    }
}
