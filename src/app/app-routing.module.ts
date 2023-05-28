import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoListComponent} from "./component/todo-list/todo-list.component";
import {HeaderComponent} from "./component/header/header.component";
import {HomeComponent} from "./component/home/home.component";
import {ListTodoComponent} from "./component/list-todo/list-todo.component";


const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'myLists',component: ListTodoComponent},
  {path: 'viewMyList',component: TodoListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
