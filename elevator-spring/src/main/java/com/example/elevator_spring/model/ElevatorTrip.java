package com.example.elevator_spring.model;

import jakarta.persistence.Entity;

@Entity
public class ElevatorTrip {

    private int startingFloor;
    private int[] floorsToVisit;

    public int getStartingFloor() {
        return startingFloor;
    }

    public void setStartingFloor(int startingFloor) {
        this.startingFloor = startingFloor;
    }

    public int[] getFloorsToVisit() {
        return floorsToVisit;
    }

    public void setFloorsToVisit(int[] floorsToVisit) {
        this.floorsToVisit = floorsToVisit;
    }
}
