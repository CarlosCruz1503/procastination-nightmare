import { Component, Input } from '@angular/core';
import { TasktableService } from 'src/app/api/tasktables/tasktable.service';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent {
  constructor(public taskService:TasktableService){}
  @Input() campo1:Boolean = false
  @Input() content:String = ""
  @Input() field: string = ""
  @Input() id:string = ""
  
  changeCampo1(){
    this.campo1= true
    setTimeout(()=>{ // this will make the execution after the above boolean has changed
      const me:any = document.querySelector("#myInput")
      me.setSelectionRange( -1, -1);
    },0);
    setTimeout(()=>{ // this will make the execution after the above boolean has changed
      const me:any = document.querySelector("#myInput")
      me.focus();
    },0);
  }
  changeCampo2(){
    const me:any = document.querySelector("#myInput")
    this.content= me.value
    this.campo1= false
    this.updateField(me.value);
  }
  updateField(newValue:string){
    this.updateTask({[this.field] : newValue}, this.id)
  }
  updateTask(mydata:object, id:string){
    this.taskService.updateTask(mydata,id).subscribe((data)=>{
      this.getAllTasks()
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
