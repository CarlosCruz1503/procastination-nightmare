import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment.development';
import { Habit } from 'src/app/models/habit.models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  urlApi = `${environment.API_URI}/habit`;
  creatingHabit = new Habit();
  createdHabitName: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  allHabits: Habit [] = []
  constructor(private http: HttpClient) { 
  }
  getHabits(){
    return this.http.get(`${this.urlApi}/getHabits`)
  }
  createHabit(data: Habit){
    return this.http.post(`${this.urlApi}/createHabit`, data)
  }
  deleteHabit(id: string){
    return this.http.delete(`${this.urlApi}/deleteHabit/${id}`)
  }
}
