package com.mrmodise.controller;

import com.mrmodise.domain.Task;
import com.mrmodise.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.stream.Stream;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping(value = {"", "/"})
    public Stream<Task> listTasks() {
        return this.taskService.list();
    }

    @PostMapping("/save")
    public Task saveTask(@RequestBody Task task) {
        System.out.println(task.toString() + " ------ ");
        return this.taskService.updateTask(task.getId(), task.isCompleted());
    }

    @PostMapping("/add")
    public Task addTask(@RequestBody Task task) {
        task.setDueDate(LocalDate.now());
        return this.taskService.save(task);
    }

}
