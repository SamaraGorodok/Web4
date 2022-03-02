package com.example.web4backend.model;

import com.example.web4backend.dto.EntryReqDto;
import com.example.web4backend.entity.Entry;
import com.example.web4backend.exceptions.NotIncludedInTheRangeException;
import org.springframework.stereotype.Component;


import java.util.Date;

@Component
public class AreaChecker {

    public Entry checkEntry(EntryReqDto entryReq, long date) throws NotIncludedInTheRangeException {
        double x = entryReq.getX();
        double y = entryReq.getY();
        double r = entryReq.getR();

        if (r > 2 || r < -2) {
            throw new NotIncludedInTheRangeException("r in (-3;5)");
        } else if (y < -3 || y > 5) {
            throw new NotIncludedInTheRangeException("y in (-3;3)");
        } else if (x<-2 || x>2) {
            throw new NotIncludedInTheRangeException("x in (-3;5)");
        }
        boolean entryValue = checkGetInto(entryReq.getX(), entryReq.getY(), entryReq.getR());
        long now = new Date().getTime();
        return new Entry(entryReq.getX(), entryReq.getY(), entryReq.getR(), entryValue, (now - date));
    }


    public boolean checkGetInto(double x, double y, double r) {
        return checkIntoTriangle(x, y, r) || checkIntoRectangle(x, y, r) || checkIntoCircle(x, y, r);
    }

    public boolean checkIntoTriangle(double x, double y, double r) {
        return (x>=0&&y>=0&&2*x+y<r);
    }

    public boolean checkIntoRectangle(double x, double y, double r) {
        return (x>0&&y<0)&&(x<r/2&&y>-r);
    }

    public boolean checkIntoCircle(double x, double y, double r) {
        return ((x<0&&y>0)&&(x*x+y*y<r*r));
    }
}