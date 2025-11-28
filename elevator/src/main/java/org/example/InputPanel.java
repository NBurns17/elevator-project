package org.example;

import java.util.Scanner;

/**
 * Class to simulate the input panel for the elevator
 */
public class InputPanel {
    private static final String START_FLOOR_TEXT = "Please input the starting floor for the elevator: ";
    private final Scanner scanner = new Scanner(System.in);

    public int getStartingFloor() {
        System.out.printf(START_FLOOR_TEXT);
        int startingFloor;
        try {
            startingFloor = scanner.nextInt();
        }
    }
}
