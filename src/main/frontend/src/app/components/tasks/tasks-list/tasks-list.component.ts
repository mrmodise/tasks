import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../../services/task/task.service';
import {ITask, Task} from '../../../models/task';

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

    tasks: Task;

    constructor(private taskService: TaskService) {
    }

    ngOnInit() {
        this.taskService.getTasks().subscribe((task: ITask) => {
            this.tasks = task;
        });
    }

    onTaskChange($event, task: ITask) {
        console.log(`Task changed ${JSON.stringify($event)} and value ${JSON.stringify(task)}`);
    }

    getDueDateLabel(task: ITask) {
        return task.completed ? 'label-success': 'label-primary';
    }
}
