import {Component} from '@angular/core';
import {Task} from "../../../model/task.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {TodoListService} from "../../../service/todo-list.service";
import {v4 as uuidv4} from "uuid";

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.css']
})
export class AddNewTaskComponent {


  taskToEdit!: Task;

  editForm !:FormGroup;

  constructor(private todoListService: TodoListService,
              private fb : FormBuilder){
  }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      description : this.fb.control(""),
      state : this.fb.control(false),
    })
  }

  handleAddNewTask() {
    let newTask ={
      id: uuidv4(),
      description : this.editForm.controls['description'].value,
      state : this.editForm.controls['state'].value
    };
    this.todoListService.addNewTask(newTask).subscribe({
        next : () => {
          this.todoListService.addTask = false;
        }
      }
    )
  }


}
