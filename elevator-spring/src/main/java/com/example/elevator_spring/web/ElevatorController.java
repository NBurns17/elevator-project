package com.example.elevator_spring.web;

import com.example.elevator_spring.model.ElevatorTrip;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static java.lang.Integer.valueOf;

@RestController
@RequestMapping("/api")
public class ElevatorController {

    private static final Logger log = LoggerFactory.getLogger(ElevatorController.class);

    @GetMapping("/")
    public String index() {
        log.info("Connected to the elevator");
        return "Welcome to the elevator";
    }

    @PostMapping("/trip")
    ResponseEntity<Integer> completeTrip(@RequestBody ElevatorTrip elevatorTrip) {
        log.info("Request to create group: {}", elevatorTrip);
        return ResponseEntity.ok().body(valueOf(3));
    }
}
