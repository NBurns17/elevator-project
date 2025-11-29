package org.example;

/**
 * Class to simulate elevator functions
 */
public class Elevator {

    /**
     * Method to simulate visiting the floors
     *
     * @param startingFloor int representing the floor that the elevator will start on
     * @param floorsToVisit Array of integers representing floors to visit
     * @return the amount of time it takes to complete the trip (10 * floor)
     */
    public static int visitFloors(int startingFloor, int[] floorsToVisit) {
        int currentFloor = startingFloor;
        int floorsLength = floorsToVisit.length;
        int floorsTraveled = 0;

        // Add the distances traveled
        for (int i = 0; i < floorsLength; i++) {
            int nextFloor = floorsToVisit[i];
            floorsTraveled += Math.abs(nextFloor - currentFloor);
            currentFloor = nextFloor;
        }

        return floorsTraveled * 10;
    }
}
