package com.example.web4backend.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "entries")
@NoArgsConstructor
@Data
public class Entry {
    @Id
    @JsonIgnore
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private double x;
    private double y;
    private double r;
    private boolean inArea;
    private long workTime;

    public Entry(double x, double y, double r, boolean inArea, long workTime) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.inArea = inArea;
        this.workTime = workTime;
    }

    @Override
    public String toString() {
        return "Entry{" +
                "x=" + x +
                ", y=" + y +
                ", r=" + r +
                ", inArea=" + inArea +
                ", workTime=" + workTime +
                '}';
    }
}