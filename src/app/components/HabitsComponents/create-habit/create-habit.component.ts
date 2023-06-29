import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HabitService } from 'src/app/api/habit/habits.service';
import { Habit } from 'src/app/models/habit.models';

@Component({
  selector: 'app-create-habit',
  templateUrl: './create-habit.component.html',
  styleUrls: ['./create-habit.component.css']
})

export class ModalHabitComponent {

  constructor (public habitService: HabitService, private modalService: NgbModal) {   }
  closeCreateHabit(){
    this.modalService.dismissAll();
  }
  cleanForm(){
    this.habitService.creatingHabit = new Habit()
  }
  createHabit(form: NgForm){
    let data = form.value;
    this.habitService.createHabit(data).subscribe((data:any) => {
      alert(`Usuario creado`)
      console.log({data})
      this.cleanForm(); 
    })
  }
}



