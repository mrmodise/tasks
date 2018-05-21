import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../../services/task/task.service';
import {ITask, Task} from '../../../models/task';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

    tasks: Task;
    datePipe = new DatePipe('en-US');
    date: string;

    constructor(private taskService: TaskService) {
    }

    ngOnInit() {
        this.taskService.getTasks().subscribe((task: ITask) => {
            this.tasks = task;
        });
    }

    onTaskChange(event, task: ITask) {

        this.date = this.datePipe.transform(task.dueDate, 'yyyy-MM-dd');
        let newTask = new Task(task.taskName, this.date, task.completed);

        console.log(newTask);

        this.taskService.saveTask(task, event.target.checked).subscribe(data => {
            console.log(`Success ${JSON.stringify(data)}`);
        });
    }

    getDueDateLabel(task: ITask) {
        return task.completed ? 'label-success': 'label-primary';
    }
}
