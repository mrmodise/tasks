package com.mrmodise.service;

import com.mrmodise.domain.Task;

import java.util.stream.Stream;

public interface TaskService {
    Stream<Task> list();
    Task save(Task task);
    Task updateTask(Long id, boolean completed);
}
