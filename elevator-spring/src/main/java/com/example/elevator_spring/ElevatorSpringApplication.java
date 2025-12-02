package com.example.elevator_spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.jdbc.autoconfigure.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class ElevatorSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(ElevatorSpringApplication.class, args);
	}

}
