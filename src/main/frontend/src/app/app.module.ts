import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {TasksListComponent} from './components/tasks/tasks-list/tasks-list.component';
import {TasksAddComponent} from './components/tasks/tasks-add/tasks-add.component';
import {HttpClientModule} from '@angular/common/http';
import {TaskService} from './services/task/task.service';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        TasksComponent,
        TasksListComponent,
        TasksAddComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [TaskService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
