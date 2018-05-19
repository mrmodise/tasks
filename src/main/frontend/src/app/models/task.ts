export interface ITask {
  id: number,
  taskName: string,
  dueDate: string,
  isCompleted: boolean
}

export class Task implements ITask {
  id: number;
  taskName: string;
  dueDate: string;
  isCompleted: boolean;

  constructor() {

  }

}
