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

    tasks: Task;
    datePipe = new DatePipe('en-US');
    date: string;

    constructor(private taskService: TaskService,
                public toaster: ToastsManager,
                vcr: ViewContainerRef) {
        this.toaster.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
        this.taskService.getTasks().subscribe((task: ITask) => {
            this.tasks = task;
        },error => console.log(error));
    }

    onTaskChange(event, taskId: number, completed: boolean) {
        this.toaster.error('What error', 'error');
        console.log(taskId + ' ------ ' + completed + ' event ' + JSON.stringify(event));
        this.taskService.updateTask(taskId, completed).subscribe(data => {
            console.log(`Success ${JSON.stringify(data)}`);
        }, error => console.log(error));
    }

    getDueDateLabel(task: ITask) {
        return task.completed ? 'label-success': 'label-primary';
    }
}
