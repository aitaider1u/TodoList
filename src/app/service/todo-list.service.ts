import { Injectable } from '@angular/core';
import {Task} from "../model/task.model";
import {Observable, of} from "rxjs";
import {v4 as uuidv4} from 'uuid';
import {Todo} from "../model/todo.model";
import {ListTodosService} from "./list-todos.service";

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private _todo !: Todo;
  taskToEdit : Task | undefined;
  private _addTask!: boolean;


  get todo(): Todo {
    return this._todo;
  }

  set todo(value: Todo) {
    this._todo = value;
  }

  constructor() {
    this._addTask = false;
  }

  getAllTasks() : Observable<Todo>{
    return of(this._todo);
  }

  setTaskToEdit(id:string) : Observable<boolean> {
    this.taskToEdit = this._todo.tasks?.find(item => item.id == id);
    return of(true);
  }

  editTask(id:string,taskNew:Task) : Observable<boolean>{
    let task = this._todo.tasks.find(item => item.id == id);
    if (task){
      task!.description = taskNew.description;
      task!.state = taskNew.state;
      return of(true);
    }
    return of(false);
  }

  deleteTask(id:string) : Observable<boolean>{
    this._todo.tasks = this._todo.tasks!.filter(item => item.id !== id);
    return of(true);
  }


  set addTask(value: boolean) {
    this._addTask = value;
  }

  get addTask(): boolean {
    return this._addTask;
  }

  addNewTask(newTask: Task) {
    newTask.id = uuidv4();
    this._todo.tasks.push(newTask);
    return of(true);
  }
}
