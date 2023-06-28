import { Component, Input } from '@angular/core';
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
    console.log(this.taskService.allTasks)
  }
  getAllTasks(){
    this.taskService.getAllTasks().subscribe((data:any)=>{
      this.taskService.allTasks = data || []
      console.log(data)
    }
    )
  }
}
