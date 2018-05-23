import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from '../../../services/task/task.service';
import {ITask, Task} from '../../../models/task';
import {DatePipe} from '@angular/common';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

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
        },error => console.log(error));
    }

    onTaskChange(event, taskId: number, completed: boolean) {
        console.log(taskId + ' ------ ' + completed + ' event ' + JSON.stringify(event));
        this.taskService.updateTask(taskId, completed).subscribe(data => {
            console.log(`Success ${JSON.stringify(data)}`);
        }, error => console.log(error));
    }

    getDueDateLabel(task: ITask) {
        return task.completed ? 'label-success': 'label-primary';
    }
}
