package com.example.web4backend.repo;

import com.example.web4backend.entity.Entry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface EntryRepo extends JpaRepository<Entry,Long> {

}
