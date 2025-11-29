package org.example;

import java.util.ArrayList;
import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    private static final String WELCOME_TEXT = "Welcome to the Elevator";
    private static final String EXPLANATION = "To operate, the elevator will first ask you to enter a starting floor number";
    private static final String RESULT = "Trip complete! The time taken to visit each floor was %d\n";
    private static final String REPEAT_PROMPT = "Would you like to run the elevator again? Enter \"yes\" to go again or \"no\" to quit: ";

    public static void main(String[] args) {
        boolean runElevator = true;
        Scanner scanner = new Scanner(System.in);
        System.out.printf(WELCOME_TEXT);
        System.out.print("\n\n");
        System.out.printf(EXPLANATION);
        System.out.print("\n");

        do {
            int startingFloor = InputPanel.getStartingFloor();
            int[] floorList = InputPanel.getFloorArray();

            int timeForTrip = Elevator.visitFloors(startingFloor, floorList);

            System.out.printf(RESULT, timeForTrip);
            String repeat = "";

            // Ask the user whether they would like to go again
            while (!isValidRepeatResponse(repeat)) {
                System.out.print(REPEAT_PROMPT);
                repeat = scanner.nextLine();
            }

            runElevator = isPositiveResponse(repeat);
        } while (runElevator);

    }

    private static boolean isValidRepeatResponse (String response) {
        return isPositiveResponse(response) || isNegativeResponse(response);
    }

    private static boolean isPositiveResponse(String response) {
        return response.equalsIgnoreCase("y") || response.equalsIgnoreCase("yes");
    }

    private static boolean isNegativeResponse(String response) {
        return response.equalsIgnoreCase("n") || response.equalsIgnoreCase("no");
    }
}