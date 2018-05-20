import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {DatePipe} from '@angular/common';
import {TaskService} from '../../../services/task/task.service';
import {Task} from '../../../models/task';

@Component({
    selector: 'app-tasks-add',
    templateUrl: './tasks-add.component.html',
    styleUrls: ['./tasks-add.component.css']
})
export class TasksAddComponent implements OnInit {

    taskField: FormControl;
    taskInfo: string[] = [];
    datePipe = new DatePipe('en-US');
    date: any;
    task: Task;

    constructor(private taskService: TaskService) {
    }

    ngOnInit() {
        this.formChanges();
    }

    formChanges() {
        this.taskField = new FormControl();

        this.taskField
            .valueChanges
            .debounceTime(600)
            .distinctUntilChanged().subscribe(task => {
            if (task.length === 0) return;

            this.taskInfo.push(task);

            this.date = this.datePipe.transform(Date.now(), 'dd/MM/2018');

            this.task = new Task(12, task.taskName, this.date, task.completed);

            console.log(task + ' ' + this.date);
        });
    }

}
