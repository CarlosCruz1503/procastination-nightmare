import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TasktableService } from 'src/app/api/tasktables/tasktable.service';
import { TaskTable } from 'src/app/models/tasktables.model';

@Component({
  selector: 'app-create-task-modal',
  templateUrl: './create-task-modal.component.html',
  styleUrls: ['./create-task-modal.component.css']
})
export class CreateTaskModalComponent {
  @Output() getTasks: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  constructor(public taskService: TasktableService){}
  errormessage:boolean = false
  stateOptions:string [] = ["Completado", "En Progreso", "Con Demora", "Aplazado", "Cancelado", "No Iniciado" ]
  i = this.stateOptions.length-1
  
  ngOnInit(){

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
  createTask(form: NgForm): void{
    let data = form.value
    delete data._id
    if(data.name === "" || data.state === "" || data.type === "" || data.startdate === "" || data.enddate === "" || data.inCharge === "" ){
      this.errormessage= true
    }else{
      console.log(data)
      this.taskService.createTask(data).subscribe((data:any)=>{
        // alert(data.status>399 ? "Error al crear la tarea": "Tarea Correctamente Creada");
      })
      this.getTasksAgain()

    }

    
  }
}

