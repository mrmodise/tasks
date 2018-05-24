import {Component, Input, OnInit, ViewContainerRef} from '@angular/core';
import {TaskService} from '../../../services/task/task.service';
import {ITask, Task} from '../../../models/task';
import {DatePipe} from '@angular/common';
import {ToastsManager} from 'ng2-toastr';

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

    tasks: Task[] = [];
    datePipe = new DatePipe('en-US');
    date: string;

    constructor(private taskService: TaskService,
                public toaster: ToastsManager,
                vcr: ViewContainerRef) {
        this.toaster.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
        this.taskService.getTasks().subscribe((task: Task[]) => {
            this.tasks = task;
        }, error => this.toaster.error(`Could not load tasks data ${JSON.stringify(error)}`));

        this.taskService.taskChanged.subscribe((updatedTask: Task) => {
            this.tasks.push(updatedTask);
        });
    }

    onTaskChange(task, completed) {
        task.completed = completed;
        this.taskService.updateTask(task.id, task.completed).subscribe(() => {
            if (completed) {
                this.toaster.success(`Task with ID ${task.id} has been completed`);
            } else {
                this.toaster.warning(`Task with ID ${task.id} is not complete`);
            }
        }, error => this.toaster.error(`Could not update tasks data ${JSON.stringify(error)}`));
    }

    getDueDateLabel(task: ITask) {
        return task.completed ? 'label-success' : 'label-primary';
    }
}
