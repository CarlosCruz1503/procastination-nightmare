import { Injectable, OnInit } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { EventModel } from 'src/app/components/mainappcomponents/calendar/shared/event.model';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  urlApi = `${environment.API_URI}/event`
  eventToCreate: EventModel = new EventModel()
  allEvents: EventModel[] = []
  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0OTI0NzU1NzZhMjRlODBjOGNjZmI0ZSIsIm5hbWUiOiJDYXJsb3NDcnV6IiwiZW1haWwiOiJjYXJsb3NjcnVAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkMEZXckpQdi5LeUFJYUNFZlUwbnNxT3RONzdjNGNnWWIvVHlMdktkNmVqaUxNV29YemQ4eEciLCJpbWFnZSI6bnVsbH0sImlhdCI6MTY4NzgyMjgxNX0.KfXhvRzJ__IysO9O_lROHy6Afor-KNVPGfjhEAOpQqA'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllEvents();
  }


  getAllEvents() {
    console.log(this.urlApi);
    return this.http.get<EventModel[]>(`${this.urlApi}/getEvent`, { headers: new HttpHeaders({'Authorization': 'key ' + this.token})});

  }

  createEvent(data: EventModel) {
    return this.http.post(`${this.urlApi}/createEvent`, data, { headers: new HttpHeaders({'Authorization': 'key ' + this.token})}).pipe(
      map((response: any) => {
        data._id = response._id;
        return response;
      })
    );
  }


  deleteEvent(title: string){
    return this.http.delete(`${this.urlApi}/deleteEvent/${title}`, { headers: new HttpHeaders({'Authorization': 'key ' + this.token})})
  }

  updateEvent(data: any){
    console.log(data)
    let dataToUpdate = {
      title: data.title,
      dataToUpdate : data.event
    }
    console.log(dataToUpdate)
    return this.http.put(`${this.urlApi}/updateEvent`, dataToUpdate, { headers: new HttpHeaders({'Authorization': 'key ' + this.token})})
  }

  // getAllEvents() {
  //   console.log(this.urlApi)
  //   return this.http.get<EventModel[]>(`${this.urlApi}`);
  // }

  // createEvent(data: EventModel) {
  //   console.log(this.urlApi)
  //   return this.http.post<EventModel>(`${this.urlApi}`, data);
  // }

  // deleteEvent(eventId: string) {
  //   return this.http.delete(`${this.urlApi}/${eventId}`);
  // }

  // // updateEvent(eventId: string, data: EventModel) {

  // //   return this.http.put(`${this.urlApi}/${eventId}`, data);
  // // }

  // updateEvent(eventId : string, data: EventModel){
  //   let dataToUpdate = {
  //     _id: data._id,
  //     dataToUpdate : data
  //   }
  //   return this.http.put(`${this.urlApi}/updateEvent`, dataToUpdate)
  // }

}


