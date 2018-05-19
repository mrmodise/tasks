import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/retry';
import {ITask} from '../../models/task';

@Injectable()
export class TaskService {

  constructor(private http: HttpClient) {
  }

  getTasks() {
    return this.http.get<ITask>('/api/tasks').retry(4);
  }
}
