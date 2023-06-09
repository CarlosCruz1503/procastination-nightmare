import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TaskTable } from 'src/app/models/tasktables.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class TasktableService {
  urlApi = `${environment.API_URI}/task`
  taskToCreate: TaskTable = new TaskTable()
  allTasks: TaskTable[] = []
  // token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0OTI0NzU1NzZhMjRlODBjOGNjZmI0ZSIsIm5hbWUiOiJDYXJsb3NDcnV6IiwiZW1haWwiOiJjYXJsb3NjcnVAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkMEZXckpQdi5LeUFJYUNFZlUwbnNxT3RONzdjNGNnWWIvVHlMdktkNmVqaUxNV29YemQ4eEciLCJpbWFnZSI6bnVsbH0sImlhdCI6MTY4NzM5Nzg2Mn0.Ct7mGJnck_1fVyefdhGL6E9TeB_N4gtYsTpLm0QMRcQ'
  token = localStorage.getItem('token') 
  constructor(private http:HttpClient) { }

  getAllTasks(){
    console.log(this.urlApi)
    return this.http.get(`${this.urlApi}/getTasks`, { headers: new HttpHeaders({'Authorization': 'key ' + this.token})}) 
  }
  createTask(data: TaskTable){
    return this.http.post(`${this.urlApi}/createTask`,data , { headers: new HttpHeaders({'Authorization': 'key ' + this.token})})
  }
  updateTask(data: TaskTable, _id:string){
    return this.http.put(`${this.urlApi}/updateTask/${_id}`,data, { headers: new HttpHeaders({'Authorization': 'key ' + this.token})})
  }
  deleteTask(_id:string){
    return this.http.delete(`${this.urlApi}/deleteTask/${_id}`, { headers: new HttpHeaders({'Authorization': 'key ' + this.token})})
  }
  getTask(_id:string){
    return this.http.get(`${this.urlApi}/getTask/${_id}`, { headers: new HttpHeaders({'Authorization': 'key ' + this.token})}) 
  }
}
