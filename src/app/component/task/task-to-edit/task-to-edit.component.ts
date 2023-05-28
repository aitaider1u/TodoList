import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../../../model/task.model";
import {TodoListService} from "../../../service/todo-list.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-task-to-edit',
  templateUrl: './task-to-edit.component.html',
  styleUrls: ['./task-to-edit.component.css']
})
export class TaskToEditComponent implements OnInit{

  @Input()
  taskToEdit!: Task;

  editForm !:FormGroup;

  constructor(private todoListService: TodoListService,
              private fb : FormBuilder,
              private router :Router){
  }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      description : this.fb.control(this.taskToEdit.description),
      state : this.fb.control(this.taskToEdit.state),
    })
  }

  handleEditTask(id: string) {
    let newtask =  {
      id : id,
      description : this.editForm.controls['description'].value,
      state : this.editForm.controls['state'].value,
    }
    this.todoListService.editTask(id,newtask).subscribe({
        next : () => {
          this.todoListService.taskToEdit = undefined;
        }
      }
    )
  }

  handleExitEditATask() {
    this.todoListService.taskToEdit = undefined;
  }

}
