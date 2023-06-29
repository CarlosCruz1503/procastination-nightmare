import { Component, Input, OnInit, ElementRef, ViewChild  } from '@angular/core';
import { TasktableService } from 'src/app/api/tasktables/tasktable.service';
import { TaskTable } from 'src/app/models/tasktables.model';

@Component({
  selector: 'app-tasktables',
  templateUrl: './tasktables.component.html',
  styleUrls: ['./tasktables.component.css']
})
export class TasktablesComponent {
  constructor(public taskService:TasktableService){}
  currentid:string = ''


  
  ngOnInit(){
    this.getAllTasks()
    console.log(this.taskService.allTasks)
  }
  changeCurrentId(newId:any){
    this.currentid =  newId;
  }
  updateState(newState:string){
    this.updateTask({"state": newState}, this.currentid)
  }
  createTask(){
    this.changeCurrentId("");
    this.taskService.taskToCreate = new TaskTable();
    this.taskService.taskToCreate.state = "No Iniciado"
  }
  refreshTasks(gettask: Boolean){
    if(gettask){
      const mybtn:any = document.querySelector("#closebtn")
      mybtn.click()
      this.getAllTasks()
      console.log("funciona")
    }
  }
  getAllTasks(){
    this.taskService.getAllTasks().subscribe((data:any)=>{
      this.taskService.allTasks = data || []
      console.log(data)
    }
    )
  }
  updateTask(mydata:object, id:string){
    this.taskService.updateTask(mydata,id).subscribe((data)=>{
      this.getAllTasks()
    })
  }
  // sortTasks(asc:boolean, property:string){
  //   if(asc){
  //     this.taskService.allTasks.sort((a, b) => (a["name"]? < b["name"]) ? 1 : -1);
  //   }else{
  //     this.taskService.allTasks.sort((a, b) => (a[property] > b[property]) ? 1 : -1);
  //   }
  // }
}
