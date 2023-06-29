import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TasktableService } from 'src/app/api/tasktables/tasktable.service';
import { TaskTable } from 'src/app/models/tasktables.model';


@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css']
})
export class UpdateModalComponent implements OnChanges{
  @Output() getTasks: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Input() taskToUpdate:string = ''
  constructor(public taskService: TasktableService){}
  stateOptions:string [] = ["Completado", "En Progreso", "Con Demora", "Aplazado", "Cancelado", "No Iniciado" ]
  i = this.stateOptions.length-1

  ngOnChanges(changes: SimpleChanges): void {
    this.fillForm();
  }

  ngOnInit(){

  }
  fillForm(){
    this.taskService.getTask(this.taskToUpdate).subscribe((data:any)=>{
      this.taskService.taskToCreate = data || []
      console.log(data)
    }
    )
  }
  getTasksAgain() {
    this.getTasks.emit(true);
  }
  test(){
    console.log("eureka")
  }
  changeState(){
    this.i++
    if(this.i > this.stateOptions.length-1){
      this.i=0
    }
    this.taskService.taskToCreate.state = this.stateOptions[this.i] 
  }
  updateTask(form: NgForm): void{
    let data = form.value
    delete data._id
    console.log(data)
    this.taskService.updateTask(data, this.taskToUpdate).subscribe((data)=>{
    })
    this.getTasksAgain();
    this.getAllTasks();
  }
  getAllTasks(){
    this.taskService.getAllTasks().subscribe((data:any)=>{
      this.taskService.allTasks = data || []
      console.log(data)
    }
    )
  }
}
