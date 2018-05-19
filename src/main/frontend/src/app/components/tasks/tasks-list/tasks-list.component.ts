import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../../services/task/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    console.log("I am not in task list");
    this.taskService.getTasks().subscribe(task => {
      console.log(`These are the tasks ${JSON.stringify(task)}`);
    });
  }


}
