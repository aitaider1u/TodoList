import {Component, OnInit} from '@angular/core';
import {Task} from "../../model/task.model";
import {TodoListService} from "../../service/todo-list.service";
import {Todo} from "../../model/todo.model";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],

})
export class TodoListComponent implements OnInit{
  todo!: Todo | undefined;

  constructor(public tdListService : TodoListService) {
  }

  ngOnInit(): void {
    this.tdListService.getAllTasks().subscribe({
      next : value => {
        this.todo = value;
      }
    });

  }

  handleSetTaskToEdit(id: string) {
    this.tdListService.setTaskToEdit(id);
  }

  handleRemoveTask(id: string){
    this.tdListService.deleteTask(id).subscribe({
      next : (data) =>{
        this.todo = this.tdListService.todo;
      }
    })
  }

  handleAddTask() {
    this.tdListService.addTask = true;
  }
}
