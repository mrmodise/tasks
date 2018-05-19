export interface ITask {
    id: number,
    taskName: string,
    dueDate: string,
    completed: boolean
}

export class Task implements ITask {

    constructor(public id, public taskName, public dueDate, public completed) {
        this.id = id;
        this.taskName = name;
        this.dueDate = dueDate;
        this.completed = completed;
    }

}
