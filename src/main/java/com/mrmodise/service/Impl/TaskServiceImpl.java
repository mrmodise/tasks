package com.mrmodise.service.Impl;

import com.mrmodise.domain.Task;
import com.mrmodise.repository.TaskRepository;
import com.mrmodise.service.TaskService;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Optional;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

@Service
public class TaskServiceImpl implements TaskService {

    TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public Stream<Task> list() {
        Iterable<Task> all = this.taskRepository.findAll();
        return StreamSupport.stream(all.spliterator(), false);
    }

    @Override
    public Task save(Task task) {
        return this.taskRepository.save(task);
    }

    @Override
    public Task updateTask(Long id, boolean completed) {
        Optional<Task> byId = this.taskRepository.findById(id);
        Task task = byId.get();
        System.out.println(task);
        task.setCompleted(completed);
        return this.taskRepository.save(task);
    }


}
