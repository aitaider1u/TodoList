import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { TaskToEditComponent } from './component/task/task-to-edit/task-to-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AddNewTaskComponent } from './component/task/add-new-task/add-new-task.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { ListTodoComponent } from './component/list-todo/list-todo.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TaskToEditComponent,
    AddNewTaskComponent,
    HeaderComponent,
    HomeComponent,
    ListTodoComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
