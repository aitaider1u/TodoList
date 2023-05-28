import {Component, OnInit} from '@angular/core';
import {Todo} from "../../model/todo.model";
import {ListTodosService} from "../../service/list-todos.service";
import {Router} from "@angular/router";
import {TodoListService} from "../../service/todo-list.service";

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements  OnInit{
  todos !: Todo[];
  currentTodo !:Todo ;

  constructor(private listTodosServices : ListTodosService,
              private todoListServices : TodoListService,
              private router :Router) {
  }

  ngOnInit(): void {
    this.listTodosServices.getAllTodos().subscribe({
      next : (value) => {
        this.todos = value;
      }
    })
  }

  handleViewTodoList(id: string) {
    let a = this.todos.find(item => item.id == id);
    if (a)
      this.todoListServices.todo = a;
    this.router.navigateByUrl("/viewMyList");
  }


}
