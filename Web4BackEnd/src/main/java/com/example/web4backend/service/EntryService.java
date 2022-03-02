package com.example.web4backend.service;

import com.example.web4backend.entity.Entry;
import com.example.web4backend.entity.User;
import com.example.web4backend.repo.EntryRepo;
import com.example.web4backend.repo.UserRepo;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Data
@Service
public class EntryService {
    @Autowired
    private EntryRepo entryRepo;
    @Autowired
    private UserRepo userRepo;

    public synchronized void saveEntry(Entry entry) {
        entryRepo.save(entry);
    }

    public void clear(String username) {
        userRepo.findUserByUsername(username).setEntries(new ArrayList<>());
        entryRepo.deleteAll(userRepo.findUserByUsername(username).getEntries());
    }


}
