import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {DatePipe} from '@angular/common';
import {TaskService} from '../../../services/task/task.service';
import {Task} from '../../../models/task';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'app-tasks-add',
    templateUrl: './tasks-add.component.html',
    styleUrls: ['./tasks-add.component.css']
})
export class TasksAddComponent implements OnInit {

    taskField: FormControl;
    datePipe = new DatePipe('en-US');
    date: any;

    constructor(private taskService: TaskService,
                public toaster: ToastsManager,
                vcr: ViewContainerRef) {
        this.toaster.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
        this.toaster.success('Successfully saved task', 'SUCCESS');
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
                this.toaster.success('Successfully saved task', 'SUCCESS');
                this.taskField.reset();
            });
        });
    }

}
