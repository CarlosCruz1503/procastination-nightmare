import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListHabitComponent } from '../../HabitsComponents/list-habit/list-habit.component';
import { ModalHabitComponent } from '../../HabitsComponents/create-habit/create-habit.component';
@Component({
  selector: 'app-ask-habit',
  templateUrl: './ask-habit.component.html',
  styleUrls: ['./ask-habit.component.css']
})
export class AskHabitComponent {

  constructor(private modalService: NgbModal) {  }

  openListHabitModal() {
    this.modalService.open(ListHabitComponent);
    // Puedes agregar configuraciones adicionales al modal si lo necesitas
  }
  openModalHabit(){
    this.modalService.open(ModalHabitComponent)
  }
}
