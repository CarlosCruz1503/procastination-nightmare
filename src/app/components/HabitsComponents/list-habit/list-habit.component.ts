import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';
import timeGridPlugin from '@fullcalendar/timegrid';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-habit',
  templateUrl: './list-habit.component.html',
  styleUrls: ['./list-habit.component.css']
})
export class ListHabitComponent {

  habitList: string[] = ['Trotar','Meditar','Estudiar','Leer']

  constructor(private modalService: NgbModal) {}
  closeListHabit(){
    this.modalService.dismissAll();
  }
}
