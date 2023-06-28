import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TasktableService } from 'src/app/api/tasktables/tasktable.service';
import { TaskTable } from 'src/app/models/tasktables.model';

@Component({
  selector: 'app-create-task-modal',
  templateUrl: './create-task-modal.component.html',
  styleUrls: ['./create-task-modal.component.css']
})
export class CreateTaskModalComponent {
  constructor(public taskService: TasktableService){}

  test(){
    console.log("eureka")
  }
}

