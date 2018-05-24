import {EventEmitter, Injectable, Input} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/retry';
import {ITask} from '../../models/task';
import {Task} from '../../models/task';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';


@Injectable()
export class TaskService {

    private _tasks = new BehaviorSubject<Task[]>([]);
    data$: Observable<Task[]> = this._tasks.asObservable();

    taskChanged = new EventEmitter<Task>();

    constructor(private http: HttpClient) {
    }

    getTasks() {
        return this.http.get<Task[]>('/api/tasks').retry(4);
    }

    updateTask(taskId: number, completed: boolean) {
        let task = new Task('', completed, '', taskId);
        return this.http.post<ITask>('/api/tasks/save', task).retry(1);
    }

    addTask(task: Task) {
        return this.http.post<ITask>('/api/tasks/add', task).retry(1);
    }
}
