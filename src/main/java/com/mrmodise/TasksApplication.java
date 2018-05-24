package com.mrmodise;

import com.mrmodise.domain.Task;
import com.mrmodise.service.TaskService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@SpringBootApplication
public class TasksApplication {

	public static void main(String[] args) {
		SpringApplication.run(TasksApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(TaskService taskService) {
		return (String... args) -> {
			Task task = new Task(1L, "Create Spring Boot Application",
                    Date.from(LocalDate.now().atStartOfDay(ZoneId.systemDefault()).toInstant()), true);
			System.out.println(task.toString());
			taskService.save(task);
			taskService.save(new Task(2L, "Create Spring Project Packages",
                    Date.from(LocalDate.now().plus(1, ChronoUnit.DAYS).atStartOfDay(ZoneId.systemDefault()).toInstant()), false));
			taskService.save(new Task(3L, "Create service and repository classes",
                    Date.from(LocalDate.now().plus(3, ChronoUnit.DAYS).atStartOfDay(ZoneId.systemDefault()).toInstant()), true));
			taskService.save(new Task(4L, "Create the command line runner to load data",
                    Date.from(LocalDate.now().plus(5, ChronoUnit.DAYS).atStartOfDay(ZoneId.systemDefault()).toInstant()), false));
			taskService.save(new Task(5L, "Create the required configuration properties",
                    Date.from(LocalDate.now().plus(5, ChronoUnit.DAYS).atStartOfDay(ZoneId.systemDefault()).toInstant()), true));
			taskService.save(new Task(6L, "Go to cinema to watch Black Panther",
                    Date.from(LocalDate.now().plus(5, ChronoUnit.DAYS).atStartOfDay(ZoneId.systemDefault()).toInstant()), true));
			taskService.save(new Task(7L, "Bath Botlhale",
                    Date.from(LocalDate.now().plus(5, ChronoUnit.DAYS).atStartOfDay(ZoneId.systemDefault()).toInstant()), true));
			taskService.save(new Task(8L, "Check the H2 instance database",
                    Date.from(LocalDate.now().plus(5, ChronoUnit.DAYS).atStartOfDay(ZoneId.systemDefault()).toInstant()), false));
		};
	}
}
