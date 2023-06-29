import { Component, Input } from '@angular/core';
import { TasktableService } from 'src/app/api/tasktables/tasktable.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent {
  constructor(public taskService:TasktableService){}
  @Input() deleteid:string = ''

  deleteTask(id:any){
    this.taskService.deleteTask(id).subscribe((data:any)=>{
      this.getAllTasks();
    })
  }
  getAllTasks(){
    this.taskService.getAllTasks().subscribe((data:any)=>{
      this.taskService.allTasks = data || []
      console.log(data)
    }
    )
  }

}
