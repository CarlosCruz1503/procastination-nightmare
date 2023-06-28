import { Component, LOCALE_ID, Inject, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { format, eachDayOfInterval } from 'date-fns';
import { HabitService } from 'src/app/api/habit/habits.service';
import { Habit } from 'src/app/models/habit.models';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.css']
})

export class HabitsComponent {

  nameHabit: string = 'Nicolas Gomez Barajas';
  actualDay: any;
  actualMonth: any;

  weekDays: string[] = [];
  hours: string[] = [];

  startTime = new Date();
  endTime = new Date();

  constructor (public habitService: HabitService) {
    this.startTime.setHours(5,0,0); //Establece la hora de inicio a las 5:00 am
    this.endTime.setHours(24,0,0) //Establece la hora de fin a las 24:00 pm (medianoche)

    while(this.startTime <= this.endTime) {
      const formattedHour = format(this.startTime, 'k:mm a');
      this.hours.push(formattedHour);
      this.startTime.setTime(this.startTime.getTime() + 60 * 60 * 1000); // Avanza 1 hora
    }
  }
    ngOnInit() {
      const today = new Date(); //Fecha y hora actual
      this.actualDay = format(today, 'dd')
      this.actualMonth = format(today, 'MMMM')
    
      const firstDayofWeek = new Date(today.setDate(today.getDate() - today.getDay()));
      const lastDayofWeek = new Date(today.setDate(firstDayofWeek.getDate() + 7));
      const intervalDays = eachDayOfInterval({ start: firstDayofWeek, end: lastDayofWeek });
  
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
        console.log({data})
        this.cleanForm(); 
      })
    }

    deleteHabit(_id: string){
      this.habitService.deleteHabit(_id).subscribe((data) => {
        alert("Habito Eliminado")
      })
    }
  }
