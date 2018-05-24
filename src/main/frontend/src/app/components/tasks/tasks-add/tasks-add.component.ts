import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
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

    constructor(private taskService: TaskService,
                public toaster: ToastsManager,
                vcr: ViewContainerRef) {
        this.toaster.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
        this.formChanges();
    }

    formChanges() {
        this.taskField = new FormControl();

        this.taskField.valueChanges
            .debounceTime(600)
            .distinctUntilChanged().subscribe(t => {
            if (t === null) return;
            let task = new Task(t, false, new Date().getTime());

            this.taskService.addTask(task).subscribe((newTask: Task) => {
                this.toaster.success('Task successfully saved', 'SUCCESS');
                this.taskField.reset();
                this.taskService.taskChanged.emit(newTask);
            });
        });
    }

    getTodayDate() {
        let date = new Date();
        let mm: any = date.getMonth() + 1;
        let dd: any = date.getDate();
        let yr = date.getFullYear();

        if (dd < 10) dd = '0' + dd;
        if(mm < 10) mm = '0' + mm;
        return mm + '/' + dd + '/' + yr;
    }

}
