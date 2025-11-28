package org.example;

import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.List;
import java.util.Scanner;

/**
 * Class to simulate the input panel for the elevator
 */
public class InputPanel {
    private static final String START_FLOOR_TEXT = "Please input the starting floor for the elevator: ";
    private static final String START_FLOOR_MISINPUT = "Invalid input; please enter an integer to represent the starting floor: ";
    private static final String FLOOR_LIST_TEXT = "Please input the floor numbers to visit separated by commas (ex. 1, 2, 3): ";
    private static final String FLOOR_LIST_MISINPUT = "Please enter a valid list of floor numbers separated by commas: ";
    private static final Scanner scanner = new Scanner(System.in);

    /**
     * Method to get the floor to begin the simulation
     *
     * @return int representing the starting floor
     */
    public static int getStartingFloor() {
        System.out.printf(START_FLOOR_TEXT);
        Integer startingFloor = null;

        // Loop until the user gives a valid input
        while (startingFloor == null) {
            try {
                startingFloor = scanner.nextInt();
            }
            catch (InputMismatchException e) {
                System.out.print("\n");
                System.out.printf(START_FLOOR_MISINPUT);
            }
        }
        return startingFloor;
    }

    /**
     * Get an array of floors for the elevator to visit
     *
     * @return An array of integers representing floors
     */
    public static int[] getFloorArray() {
        boolean goAgain = true;
        int[] floors = null;

        System.out.printf(FLOOR_LIST_TEXT);

        // Loop until the user provides a valid list of integers
        while (goAgain) {
            String floorString = scanner.nextLine();
            System.out.print("\n");
            String[] floorStrings = floorString.split(",\\s+?");
            int floorStringsLength = floorStrings.length;

            // Can not parse an empty list
            if (floorStringsLength == 0) {
                System.out.printf(FLOOR_LIST_MISINPUT);
                continue;
            }

            floors = new int[floorStrings.length];

            try {
                for (int i = 0; i < floorStringsLength; i++) {
                    floors[i] = Integer.parseInt(floorStrings[i]);
                }
            }
            catch (NumberFormatException e) {
                System.out.printf(FLOOR_LIST_MISINPUT);
                continue;
            }

            goAgain = false;
        }

        return floors;
    }
}
