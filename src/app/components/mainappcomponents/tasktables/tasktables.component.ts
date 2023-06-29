import { Component, Input, OnInit, ElementRef, ViewChild  } from '@angular/core';
import { TasktableService } from 'src/app/api/tasktables/tasktable.service';

@Component({
  selector: 'app-tasktables',
  templateUrl: './tasktables.component.html',
  styleUrls: ['./tasktables.component.css']
})
export class TasktablesComponent {
  constructor(public taskService:TasktableService){}


  ngOnInit(){
    this.getAllTasks()
    console.log(this.taskService.allTasks)
  }
  createTask(){
    this.taskService.taskToCreate.state = "No Iniciado"
  }
  refreshTasks(gettask: Boolean){
    if(gettask){
      this.getAllTasks()
      const mybtn:any = document.querySelector("#closebtn")
      mybtn.click()
    }
  }
  getAllTasks(){
    this.taskService.getAllTasks().subscribe((data:any)=>{
      this.taskService.allTasks = data || []
      console.log(data)
    }
    )
  }
}
