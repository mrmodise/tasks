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
    datePipe = new DatePipe('en-US');
    date: any;

    constructor(private taskService: TaskService) {
    }

    ngOnInit() {
        this.formChanges();
    }

    formChanges() {
        this.taskField = new FormControl();

        this.taskField.valueChanges
            .debounceTime(600)
            .distinctUntilChanged().subscribe(t => {
                if(t === null) return;

            let task = new Task(t, false);

            this.taskService.addTask(task).subscribe(result => {
                console.log(`Successfully saved task ${task}`);
                this.taskField.reset();
            });
        });
    }

}
