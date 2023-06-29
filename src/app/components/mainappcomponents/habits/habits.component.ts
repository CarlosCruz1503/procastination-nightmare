import { Component, LOCALE_ID, Inject, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { format, eachDayOfInterval } from 'date-fns';
import { HabitService } from 'src/app/api/habit/habits.service';
import { Habit } from 'src/app/models/habit.models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AskHabitComponent } from '../../HabitsComponents/ask-habit/ask-habit.component';
import { ListHabitComponent } from '../../HabitsComponents/list-habit/list-habit.component';
import { ModalHabitComponent } from '../../HabitsComponents/create-habit/create-habit.component';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.css']
})

export class HabitsComponent {
  actualDay: any;
  actualMonth: any;
  selectedDay?: string;
  selectedCell: { day: string, time: string } | null = null;
  createdHabitName: string | undefined= '';
  weekDays: string[] = [];
  hours: string[] = [];
  startTime = new Date();
  endTime = new Date();

  constructor (public habitService: HabitService, private modalService: NgbModal) {
    this.startTime.setHours(5,0,0); //Establece la hora de inicio a las 5:00 am
    this.endTime.setHours(24,0,0) //Establece la hora de fin a las 24:00 pm (medianoche)

    while(this.startTime <= this.endTime) {
      const formattedHour = format(this.startTime, 'k:mm a');
      this.hours.push(formattedHour);
      this.startTime.setTime(this.startTime.getTime() + 60 * 60 * 1000); // Avanza 1 hora
    }
    
  }
  openAskHabitModal(day: string, time: string) {
    this.modalService.open(AskHabitComponent);
    this.selectedDay = day;
    this.selectedCell = { day, time };
    
  }
  openListHabitModal() {
    this.modalService.open(ListHabitComponent);
   
  }
  openModalHabit(){
    this.modalService.open(ModalHabitComponent)
  }
  isCellSelected(day: string, time: string): boolean {
    return this.selectedCell !== null && this.selectedCell.day === day && this.selectedCell.time === time;
  }
    ngOnInit() {
      const today = new Date(); //Fecha y hora actual
      this.actualDay = format(today, 'dd')
      this.actualMonth = format(today, 'MMMM')
      
      const firstDayofWeek = new Date(today.setDate(today.getDate() - today.getDay()));
      const lastDayofWeek = new Date(today.setDate(firstDayofWeek.getDate() + 7));
      const intervalDays = eachDayOfInterval({ start: firstDayofWeek, end: lastDayofWeek });

      this.habitService.createdHabitName.subscribe(name => {
      this.createdHabitName = name; });
      
      for (let i = 1; i < intervalDays.length; i++) {
        const weekDay = format(intervalDays[i], 'EEE');
        const monthDay = format(intervalDays[i], 'd');
        const completeDay = `${weekDay}\n${monthDay}`;
        this.weekDays.push(completeDay);
      }
    }
    cleanForm(){
      this.habitService.creatingHabit = new Habit()
    }
    createHabit(form: NgForm){
      let data = form.value;
      this.habitService.createHabit(data).subscribe((data:any) => {
        this.createdHabitName = this.habitService.creatingHabit.name;
        console.log({data})
        this.cleanForm(); 
      })
    }
    getAllHabits(){
      this.habitService.getHabits().subscribe((data:any) => {
        this.habitService.allHabits = data || []
        console.log(data)
      })
    }

    deleteHabit(_id: string){
      this.habitService.deleteHabit(_id).subscribe((data) => {
        alert("Habito Eliminado")
      })
    }
  }
